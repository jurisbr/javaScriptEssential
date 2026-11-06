"""Join episode MP3s into single audiobook files with chapters.

Writes:
  <out>.m4b  AAC mono, chapters and cover (Apple Books, audiobook apps)
  <out>.mp3  one MP3 with ID3 chapters (plays in any audio app)

Usage:
  python3 make_audiobook.py --data episodes.js --audio-dir DIR --out NAME
      --title "..." --subtitle "..." [--code-map 1=010 01,...]
"""

import argparse
import json
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"


def cover(path: Path, badge: str, title: str, subtitle: str) -> None:
    """Square cover in aerodrome-sign style: a yellow-on-black location sign over the title."""
    size = 1400
    img = Image.new("RGB", (size, size), (18, 20, 22))
    d = ImageDraw.Draw(img)
    yellow = (242, 194, 0)
    d.rectangle([60, 60, size - 60, size - 60], outline=yellow, width=14)
    f_badge = ImageFont.truetype(FONT_BOLD, 220)
    bw = d.textlength(badge, font=f_badge)
    bx, by = (size - bw) / 2 - 50, 300
    d.rectangle([bx, by - 40, bx + bw + 100, by + 250], fill=(0, 0, 0), outline=yellow, width=12)
    d.text((bx + 50, by), badge, font=f_badge, fill=yellow)
    f_title = ImageFont.truetype(FONT_BOLD, 130)
    tw = d.textlength(title, font=f_title)
    d.text(((size - tw) / 2, 720), title, font=f_title, fill=(243, 245, 247))
    f_sub = ImageFont.truetype(FONT, 64)
    sw = d.textlength(subtitle, font=f_sub)
    d.text(((size - sw) / 2, 900), subtitle, font=f_sub, fill=(200, 206, 212))
    img.save(path, quality=90)


def duration(mp3: Path) -> float:
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(mp3)],
                         capture_output=True, text=True, check=True).stdout
    return float(out)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True, type=Path)
    ap.add_argument("--audio-dir", required=True, type=Path)
    ap.add_argument("--out", required=True, type=Path)
    ap.add_argument("--title", required=True)
    ap.add_argument("--subtitle", required=True)
    ap.add_argument("--badge", default="ATPL")
    ap.add_argument("--chapter-prefix", default="", help="e.g. '010 ' to prefix chapter names with the topic code")
    args = ap.parse_args()

    episodes = json.loads(args.data.read_text(encoding="utf-8").split("=", 1)[1].rstrip().rstrip(";"))
    files = [args.audio_dir / Path(ep["file"]).name for ep in episodes]

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        concat = tmp / "list.txt"
        concat.write_text("".join(f"file '{f.resolve()}'\n" for f in files))
        meta = [";FFMETADATA1", f"title={args.title}", f"album={args.title}", "artist=Cleared for Theory", "genre=Audiobook"]
        start = 0
        for ep, f in zip(episodes, files):
            end = start + int(round(duration(f) * 1000))
            name = f"{args.chapter_prefix}{ep['n']:02d} {ep['title']}" if args.chapter_prefix else f"{ep['n']}. {ep['title']}"
            meta += ["[CHAPTER]", "TIMEBASE=1/1000", f"START={start}", f"END={end}", f"title={name}"]
            start = end
        (tmp / "meta.txt").write_text("\n".join(meta) + "\n")
        jpg = tmp / "cover.jpg"
        cover(jpg, args.badge, args.title, args.subtitle)

        m4b = args.out.with_suffix(".m4b")
        subprocess.run(["ffmpeg", "-nostdin", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(concat),
                        "-i", str(tmp / "meta.txt"), "-i", str(jpg),
                        "-map", "0:a", "-map", "2:v", "-map_metadata", "1", "-map_chapters", "1",
                        "-c:a", "aac", "-b:a", "48k", "-ac", "1", "-c:v", "mjpeg", "-disposition:v", "attached_pic",
                        "-movflags", "+faststart", "-f", "ipod", str(m4b)], check=True)
        mp3 = args.out.with_suffix(".mp3")
        subprocess.run(["ffmpeg", "-nostdin", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(concat),
                        "-i", str(tmp / "meta.txt"), "-i", str(jpg),
                        "-map", "0:a", "-map", "2:v", "-map_metadata", "1", "-map_chapters", "1",
                        "-c:a", "copy", "-c:v", "mjpeg", "-disposition:v", "attached_pic", "-id3v2_version", "3",
                        str(mp3)], check=True)
        for f in (m4b, mp3):
            print(f"{f.name}: {f.stat().st_size / 1e6:.1f} MB, {start / 60000:.1f} min, {len(episodes)} chapters")


if __name__ == "__main__":
    main()
