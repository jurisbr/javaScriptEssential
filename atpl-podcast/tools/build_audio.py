"""Build the "Cleared for Theory" podcast episodes from the scripts in ../episodes.

Uses the open-source Kokoro TTS model (via kokoro-onnx) to voice each line,
adds a two-tone chime and pauses, normalises loudness, and writes:
  - one MP3 per episode
  - episodes.js (titles, show notes and a timestamped transcript for the player)

Setup (one-off):
  python3 -m venv venv && ./venv/bin/pip install kokoro-onnx soundfile
  download kokoro-v1.0.onnx and voices-v1.0.bin from the kokoro-onnx
  "model-files-v1.0" GitHub release into a models directory.

Usage:
  ./venv/bin/python build_audio.py --models MODELS_DIR --audio-out AUDIO_DIR --data-out episodes.js
"""

import argparse
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

SR = 24000
SHOW = "Cleared for Theory"

SPEAKERS = {
    "K": {"name": "Kate", "voice": "af_heart", "lang": "en-us"},
    "T": {"name": "Tom", "voice": "bm_george", "lang": "en-gb"},
}

# Spoken forms for abbreviations and numbers the TTS would otherwise misread.
# Applied to audio only; the transcript keeps the normal spelling.
SAY = [
    (r"\bATPL\b", "A-T-P-L"),
    (r"\bEASA\b", "Eeasa"),
    (r"\bICAO\b", "Eye-kay-oh"),
    (r"\bIAA\b", "I-A-A"),
    (r"\bUK\b", "U-K"),
    (r"\bVOR\b", "V-O-R"),
    (r"\bATO\b", "A-T-O"),
    (r"\bISA\b", "I-S-A"),
    (r"\bSARPs\b", "sarps"),
    (r"\bBernoulli", "Ber-noo-lee"),
    (r"1013\.25", "ten thirteen point two five"),
    (r"\b1\.225\b", "one point two two five"),
    (r"\b1\.98\b", "one point nine eight"),
    (r"\b36,090\b", "thirty-six thousand and ninety"),
    (r"\b56\.5\b", "fifty-six point five"),
    (r"\b24\.6\b", "twenty-four point six"),
    (r"\b4\.8\b", "four point eight"),
]


def spoken(text: str) -> str:
    for pattern, repl in SAY:
        text = re.sub(pattern, repl, text)
    return text


def silence(seconds: float) -> np.ndarray:
    return np.zeros(int(seconds * SR), dtype=np.float32)


def chime() -> np.ndarray:
    """Soft high-low two-tone chime, like a cabin call bell."""
    out = []
    for freq in (659.25, 523.25):  # E5 then C5
        t = np.arange(int(0.9 * SR)) / SR
        env = np.exp(-t * 4.0) * np.minimum(1.0, t / 0.01)
        tone = np.sin(2 * np.pi * freq * t) + 0.25 * np.sin(2 * np.pi * 2 * freq * t)
        out.append((0.22 * env * tone).astype(np.float32))
    a, b = out
    offset = int(0.45 * SR)
    mix = np.zeros(offset + len(b), dtype=np.float32)
    mix[: len(a)] += a
    mix[offset:] += b
    return mix


def trim(audio: np.ndarray, threshold: float = 0.005) -> np.ndarray:
    idx = np.where(np.abs(audio) > threshold)[0]
    if len(idx) == 0:
        return audio
    start = max(0, idx[0] - int(0.03 * SR))
    end = min(len(audio), idx[-1] + int(0.08 * SR))
    return audio[start:end]


def parse(path: Path) -> dict:
    header, body = path.read_text(encoding="utf-8").split("\n---\n", 1)
    meta = {"keys": []}
    for line in header.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key, value = key.strip().upper(), value.strip()
        if key == "KEY":
            meta["keys"].append(value)
        else:
            meta[key.lower()] = value
    items = []
    for line in body.splitlines():
        line = line.strip()
        if not line:
            continue
        if line == "[chime]":
            items.append(("chime", None))
        elif m := re.fullmatch(r"\[pause (\d+(?:\.\d+)?)\]", line):
            items.append(("pause", float(m.group(1))))
        elif m := re.fullmatch(r"([KT]): (.+)", line):
            items.append((m.group(1), m.group(2)))
        else:
            raise ValueError(f"{path.name}: cannot parse line: {line!r}")
    meta["items"] = items
    return meta


def build_episode(kokoro: Kokoro, number: int, meta: dict, audio_out: Path) -> dict:
    parts, transcript = [], []
    cursor = 0  # samples
    last_speaker = None

    def add(chunk: np.ndarray):
        nonlocal cursor
        parts.append(chunk)
        cursor += len(chunk)

    add(silence(0.3))
    for kind, value in meta["items"]:
        if kind == "chime":
            add(silence(0.3))
            add(chime())
            add(silence(0.4))
            last_speaker = None
        elif kind == "pause":
            add(silence(value))
        else:
            spk = SPEAKERS[kind]
            if last_speaker is not None:
                add(silence(0.45 if last_speaker != kind else 0.3))
            samples, sr = kokoro.create(spoken(value), voice=spk["voice"], speed=1.0, lang=spk["lang"])
            assert sr == SR, sr
            transcript.append({"s": spk["name"], "t": value, "at": round(cursor / SR, 2)})
            add(trim(samples.astype(np.float32)))
            last_speaker = kind
    add(silence(0.8))

    audio = np.concatenate(parts)
    audio_out.mkdir(parents=True, exist_ok=True)
    mp3 = audio_out / f"ep{number:02d}.mp3"
    with tempfile.TemporaryDirectory() as tmp:
        wav = Path(tmp) / "ep.wav"
        sf.write(wav, audio, SR)
        subprocess.run(
            [
                "ffmpeg", "-y", "-loglevel", "error", "-i", str(wav),
                "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", str(SR), "-ac", "1",
                "-codec:a", "libmp3lame", "-b:a", "64k",
                "-metadata", f"title={number:02d}. {meta['title']}",
                "-metadata", f"artist={SHOW}",
                "-metadata", f"album={SHOW}: Season 1",
                "-metadata", f"track={number}",
                "-metadata", "genre=Podcast",
                str(mp3),
            ],
            check=True,
        )
    duration = round(len(audio) / SR, 1)
    print(f"  ep{number:02d}: {duration / 60:.1f} min -> {mp3}", flush=True)
    return {
        "n": number,
        "title": meta["title"],
        "subject": meta.get("subject", ""),
        "summary": meta.get("summary", ""),
        "keys": meta["keys"],
        "file": f"audio/{mp3.name}",
        "duration": duration,
        "lines": transcript,
    }


def main() -> int:
    here = Path(__file__).resolve().parent
    ap = argparse.ArgumentParser()
    ap.add_argument("--models", required=True, type=Path)
    ap.add_argument("--episodes", type=Path, default=here.parent / "episodes")
    ap.add_argument("--audio-out", required=True, type=Path)
    ap.add_argument("--data-out", required=True, type=Path)
    ap.add_argument("--only", type=int, help="build just this episode number")
    args = ap.parse_args()

    kokoro = Kokoro(str(args.models / "kokoro-v1.0.onnx"), str(args.models / "voices-v1.0.bin"))
    files = sorted(args.episodes.glob("[0-9][0-9]-*.txt"))
    episodes = []
    for path in files:
        number = int(path.name[:2])
        if args.only and number != args.only:
            continue
        print(f"Building {path.name}", flush=True)
        episodes.append(build_episode(kokoro, number, parse(path), args.audio_out))

    args.data_out.write_text(
        "window.EPISODES = " + json.dumps(episodes, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {args.data_out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
