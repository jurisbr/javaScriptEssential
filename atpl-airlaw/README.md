# Air Law 010: ATPL exam prep

A study app for EASA ATPL(A) theory subject **010 Air Law**:

- **Study:** notes for all 12 syllabus topics, structured on the EASA learning objectives (Appendix to AMC & GM to Part-FCL, ED Decision 2020/018/R). Includes diagrams for navigation lights, holding entries, holding-position markings and PAPI.
- **Practice:** 250 original multiple-choice questions with explanations. Pick mixed, new questions first, weak questions, or chosen topics.
- **Mock exam:** the real format, 44 questions in 1 hour with 75 % (33) to pass (EASA Easy Access Rules for Aircrew). It has a timer, flagging, an overview grid and a review after you submit.
- **Listen:** 12 audio lessons, one per topic (about 51 minutes), voiced by two hosts with a quiz at the end of each. Each topic page has a Listen button, the Listen tab plays the lessons in order with a transcript that follows the audio, and the player remembers where you stopped.
- **Progress:** per-topic coverage and accuracy, a forecast score, and mock exam history.

Progress is saved in the browser. When the page runs as a Claude artifact, it is also saved to the viewer's private storage, so it syncs between devices.

## Files

- `audio-scripts/`: the episode scripts. Build the MP3s and `airlaw-audio.js` with `../atpl-podcast/tools/build_audio.py --episodes audio-scripts --audio-out audio --data-out airlaw-audio.js --var AIRLAW_AUDIO` (see `atpl-podcast/README.md` for setup). The MP3s are not committed.

- `index.html`: the app (page content for a Claude artifact; it has no `<html>`/`<head>` wrapper)
- `airlaw-notes.js`: topic notes (`window.AIRLAW_TOPICS`). `weight` is the number of mock-exam questions drawn from each topic (44 in total).
- `airlaw-questions.js`: the question bank (`window.AIRLAW_QUESTIONS`). In each entry the first option is the correct one, and the app shuffles them. Add new questions at the end of a topic block so existing ids stay stable.

## Accuracy

These are **not** the official ECQB questions. They were written to the learning objectives, and rules change. For example, SERA's communication-failure rules changed in May 2025. Check figures against your training school's notes.
