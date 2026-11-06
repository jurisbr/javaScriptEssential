# Cleared for Theory: ATPL study podcast

Audio lessons for the 13 EASA ATPL theory subjects. Two voices: Kate (instructor) and Tom (student). Each episode ends with a three-question quiz.

## Season 1

| # | Subject | Episode |
|---|---|---|
| 1 | Introduction | The road to the flight deck |
| 2 | 081 Principles of Flight | How a wing makes lift |
| 3 | 050 Meteorology | The standard atmosphere and your altimeter |
| 4 | 040 Human Performance | Hypoxia: your body at altitude |
| 5 | 010 Air Law | Chicago 1944: where air law begins |

## Layout

- `episodes/`: the scripts, one file per episode. A header (title, subject, summary, `KEY:` show notes) sits above a `---` line. Below it are the dialogue lines (`K:` Kate, `T:` Tom), plus `[chime]` and `[pause N]` markers.
- `tools/build_audio.py` turns the scripts into MP3s with the open-source Kokoro TTS model, and writes `player/episodes.js` (show notes and a timestamped transcript).
- `player/index.html` is the listening page. It shows the episode list, show notes and a transcript that follows the audio.

The MP3s are not committed (`player/audio/` is ignored). Rebuild them with:

```bash
python3 -m venv venv && ./venv/bin/pip install kokoro-onnx soundfile
# put kokoro-v1.0.onnx and voices-v1.0.bin (kokoro-onnx GitHub release "model-files-v1.0") in ./models
./venv/bin/python tools/build_audio.py --models ./models --audio-out player/audio --data-out player/episodes.js
```

You also need `ffmpeg` with `libmp3lame`.

## Accuracy

These scripts are study aids written to the EASA learning objectives, not official material. Check figures against your training school's notes. Wherever sources differ (for example, time of useful consciousness), the script says so.
