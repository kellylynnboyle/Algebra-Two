# Algebra II — Course Info (Period 5)

Source: syllabus PDF provided by the student (Mrs. Samir / Mr. Schacter, Room 412), 2026-27.

## Course Outline (subject to change)

1. **Sequence and Functions** ← current unit (see [sequences-and-series.md](sequences-and-series.md) and [functions.md](functions.md))
2. Polynomials (see [polynomials.md](polynomials.md))
3. Complex Numbers and Rational Exponents (see [complex-numbers-and-rational-exponents.md](complex-numbers-and-rational-exponents.md))
4. Exponential Functions and Equations (see [exponential-functions.md](exponential-functions.md))
5. Transformations of Function (see [transformations.md](transformations.md))
6. Trigonometric Function (see [trigonometric-functions.md](trigonometric-functions.md))
7. Statistical Inferences (tentative) (see [statistical-inferences.md](statistical-inferences.md))

All unit notes are drafted ahead of the class schedule from the syllabus + standard Algebra II
curriculum, not from Schoology's actual materials for each unit (still inaccessible from this
environment). Treat them as a study reference to revise against what's actually assigned as
each unit is reached.

## Grading

| Component | Weight |
|---|---|
| Demonstrated Skills | 20% |
| Assessments (Quizzes and Tests) | 70% |
| Semester Final | 10% |

- Grades updated on Schoology Mondays only.
- On-time submissions are graded first; late work is processed after.
- Late/incomplete work accepted for partial credit up to 2 weeks after the deadline.
- Homework: verify answers on Schoology and correct work before submission.
- Max 2 make-up exams per semester (excused absences); must email instructor within 1 week of the missed assessment to reschedule.
- Absence: 1 day to complete missed work per day absent.

## Contacts

- Mrs. Samir — esamir@nmusd.us
- Mr. Schacter — rschachter@nmusd.us
- Office hours: Monday during Intervention, Wednesday & Friday during lunch, or by appointment

## Notes on this repo

All homework/classwork is submitted through Schoology, which requires an NMUSD login this
environment can't reach directly (network egress + auth). Study notes here are written from
the syllabus and standard Algebra II curriculum; paste in specific assignment/material details
from Schoology as they're posted and these notes can be tailored further.

`scan_20260819030552.pdf` (uploaded 2026-08-19) is the actual Unit 1 "Sequences" classwork
packet — 26 recoverable pages (2 of the original 28 are corrupted in the file and couldn't be
extracted) mixing IMP, Mathematics Vision Project, McDougal Littell, and Kuta Software
worksheets. It's been reviewed and its approach (recursive formulas built from patterns using
`a(1)`/`a(n)`/`a(n-1)` notation, then converted to explicit formulas; word problems requiring
both forms plus a context sentence) is reflected in [sequences-and-series.md](sequences-and-series.md)
section 1a. Notably, the packet covers sequences (recursive/explicit) only — no sigma notation
or series sums appeared in it, so that part of the notes is still unconfirmed against the actual
class pace.

The PDF itself is malformed (no page tree/xref, likely a cut-off export from the scanning app)
— standard PDF viewers may report 0 pages. Its images were recovered by reading each `/Image`
object's raw stream and `zlib`-decompressing it directly (the `/Filter` was `[FlateDecode
DCTDecode]`, i.e. a zlib-wrapped JPEG per page).
