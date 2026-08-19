# CLAUDE.md

This repo is Kelly's Algebra II study notes, built from the course syllabus and
standard curriculum. The Schoology materials page itself is unreachable from
this environment (NMUSD login required, domain blocked by network egress), so
notes are drafted ahead of the class schedule and revised against Schoology
specifics when they're pasted in.

A recurring scheduled routine runs against this repo with the goal of
deepening Kelly's Algebra II knowledge over time. Its stored prompt is fixed
and outside this repo's control, so the loop's actual logic lives here instead.

## Self-improvement loop (active focus: Sequences and Series)

When a run's goal is "learn Algebra Two" / study Sequences and Series, don't
just re-verify existing material — extend it. `sequences-progress.md` is the
source of truth for what's been covered and what's next:

1. Read `sequences-progress.md`. Find the lowest-numbered level not yet marked
   Done.
2. Add that level's content to `sequences-and-series.md` as a genuinely new
   section — new formulas/techniques, worked examples, practice problems with
   answers. Not a rephrasing of what's already there.
3. Add 2-3 quiz questions at that level's difficulty to the `QUIZ_DATA` array
   in `quizzes/sequences-and-series.html`. Hand-verify every arithmetic answer
   before writing it down — a wrong answer key is worse than no quiz.
4. Mark the level Done in `sequences-progress.md` with today's date and a
   one-line note of what was added; append a line to its Log section.
5. Commit and push to the routine's working branch.
6. If Schoology ever becomes reachable, reconciling notes against its actual
   unit breakdown takes priority over adding another level.
7. Once every defined level is Done, add a new level to the table (harder
   material, or a neighboring topic like series convergence proofs) rather
   than stalling with nothing to do.
8. If there's truly nothing new to add this run, it's fine to make no commit
   — don't pad the notes just to have a diff.

This loop currently targets **Sequences and Series** only — don't spread the
same leveled-curriculum treatment to the other unit files until asked.
