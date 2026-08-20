# Sequences and Series — Algebra II Study Notes

[Take the interactive quiz →](quizzes/sequences-and-series.html)

> Per the course syllabus ([course-info.md](course-info.md)), "Sequence and Functions" is
> Unit 1 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology materials page
> itself still can't be reached from this environment (NMUSD login required, domain blocked
> by network egress rules) — but the actual **Unit 1 packet** ("UNIT 1 Sequences", 27 pages)
> was uploaded as `scan_20260819030552.pdf` and has now been transcribed, so the notes below
> are organized around what's *actually* assigned rather than a generic curriculum guess.
> The packet is Mathematics Vision Project ("Sequences" and "Linear and Exponential
> Functions" modules) plus several teacher-made worksheets and one Kuta Software sheet.
> **The packet is sequences-only — it never gets to series/sigma notation or summing terms.**
> Sections 4–5 below (series) are kept as forward-looking material for whenever that's
> assigned; sections 1–3 and 6–9 track the packet closely, including its heavy emphasis on
> *recursive* formulas, word-problem procedure, and translating between representations.

## 1. Sequences

A **sequence** is an ordered list of numbers (terms), often written `a_1, a_2, a_3, ..., a_n, ...`.

- **Finite sequence**: has a last term.
- **Infinite sequence**: continues forever.
- `a_n` (or `a(n)`) denotes the *n*-th term.
- **Domain**: for a sequence itself, the domain is the positive integers `1, 2, 3, ...`
  (or `0, 1, 2, ...` if a problem starts counting at term 0) — you can't plug in `n = 2.5`.
  When a sequence describes a real context (a word problem), the domain is often restricted
  further to make sense of the situation (e.g. "days 1 through 8" for a car that's tracked for
  8 years), and the **range** is the corresponding set of output values.

### Recursion Notation

The packet uses this notation throughout — know it cold:

| Symbol | Meaning |
|---|---|
| `a(1)` or `a_1` | 1st term of the sequence |
| `a(n)` or `a_n` | *n*th term of the sequence |
| `a(n-1)` or `a_(n-1)` | the term **right before** `a(n)` |

**Recursion** is defining the next term in a sequence using the term(s) that came before it.
A recursive formula has two parts: a **starting value** (e.g. `a(1) = 13`) and a **rule**
relating each term to the previous one (e.g. `a(n) = a(n-1) + 4`).

> **Important trap the packet calls out directly:** a recursive equation alone does *not*
> uniquely determine a sequence. `a_n = a_(n-1) + 3` describes `2, 5, 8, 11, ...` **and**
> `21, 24, 27, 30, ...` — you always need the starting value too.

### Explicit vs. Recursive Formulas

- **Explicit formula**: gives `a_n` directly as a function of `n`. Fast for finding a far-away
  term (like the 54th) without computing everything before it.
  Example: `a_n = 3n - 1` → `a_1 = 2, a_2 = 5, a_3 = 8, ...`
- **Recursive formula**: gives the first term(s) and a rule relating each term to the previous
  one(s). Natural for describing "what happens each step" but slow for a far-away term — to
  get the 54th term you'd have to grind through terms 2, 3, 4, ... 53 first.
  Example: `a_1 = 2, a_n = a_(n-1) + 3` produces the same sequence as above.

To convert recursive → explicit (or vice versa), look for a constant *difference* (arithmetic)
or constant *ratio* (geometric) between consecutive terms.

**Not every sequence has both.** Some sequences (Fibonacci: `0, 1, 1, 2, 3, 5, 8, ...`; squares:
`1, 4, 9, 16, 25, ...`; factorials: `1, 1, 2, 6, 24, 120, ...`) have a clean recursive rule but
no simple one-step explicit formula. The packet flags this directly: "for some sequences, it is
not possible to write an explicit rule."

### From Recursive to Explicit: the "Expand" method

This is the packet's core technique (from "Building Explicit Formulas") for *finding* an
explicit formula when you only have a recursive one and a pattern of figures. Build a table
with three columns — figure number, the value, and the value **expanded in terms of the first
term and repeated `+d` or `×r` steps**:

| Fig # | Dots | Expand |
|---|---|---|
| 1 | 13 | `13` |
| 2 | 17 | `13 + 4` |
| 3 | 21 | `13 + 4 + 4` |
| 4 | 25 | `13 + 4 + 4 + 4` |
| n | ... | `13 + 4(n - 1)` |

The number of `+4`s (or `×2`s for a geometric pattern) is always **one less than the figure
number**, because the first term costs zero steps. That "expand" column is exactly where the
explicit formula's `(n - 1)` comes from — seeing it worked out concretely makes the off-by-one
exponent/coefficient much harder to mess up later.

## 2. Arithmetic Sequences

A sequence where each term differs from the previous by a constant **common difference** `d`.

- Recursive: `a_n = a_(n-1) + d`
- Explicit: `a_n = a_1 + (n - 1)d`
- `d = a_n - a_(n-1)` (constant for all `n`)
- **Function family:** an arithmetic sequence is the discrete (integer-input) version of a
  **linear function** — `d` plays the role of slope, `a_1` (adjusted) plays the role of the
  y-intercept. If a word problem describes constant *addition or subtraction* each step
  (a flat weekly paycheck, a fixed monthly withdrawal), it's arithmetic/linear.

**Example**: `4, 9, 14, 19, ...` → `a_1 = 4`, `d = 5`, so `a_n = 4 + 5(n - 1) = 5n - 1`.

### Arithmetic Means
The terms between two given terms of an arithmetic sequence are **arithmetic means** — they
fill in the sequence so the common difference stays constant. To find missing terms between two
known, non-adjacent terms: count how many *steps* separate them, divide the total change by that
many steps to get `d`, then fill in term by term.

**Example**: Fill in `19, __, __, __, 71`. That's 4 steps from the 1st to the 5th term, total
change `71 - 19 = 52`, so `d = 52/4 = 13`. Terms: `19, 32, 45, 58, 71`.

## 3. Geometric Sequences

A sequence where each term is the previous term times a constant **common ratio** `r`.

- Recursive: `a_n = a_(n-1) * r`
- Explicit: `a_n = a_1 * r^(n-1)`
- `r = a_n / a_(n-1)` (constant for all `n`)
- **Function family:** a geometric sequence is the discrete version of an **exponential
  function** — `r` plays the role of the base/growth factor. If a word problem describes
  constant *percent* growth or decay each step (10% depreciation, doubling, 60% given away
  daily), it's geometric/exponential — not arithmetic, even though something is still
  "decreasing by an amount" each step.

**Example**: `3, 6, 12, 24, ...` → `a_1 = 3`, `r = 2`, so `a_n = 3 * 2^(n-1)`.

If `|r| < 1`, the terms shrink toward 0. If `|r| > 1`, they grow without bound. If `r < 0`,
terms alternate sign.

### Geometric Means
Same idea as arithmetic means, but for a constant *ratio* instead of a constant difference. To
find missing terms between two known, non-adjacent terms of a geometric sequence: count the
number of steps `k`, solve `r^k = a_last / a_first` for `r`, then multiply term by term.

**Example**: Fill in `2, __, __, __, 162` (geometric). That's 4 steps, so `r^4 = 162/2 = 81` →
`r = 3` (taking the positive root). Terms: `2, 6, 18, 54, 162`.

> **Word-problem depreciation/interest note:** "decreases by 10% each year" means the sequence
> is multiplied by `r = 1 - 0.10 = 0.90` each step, *not* subtracted by 10. Writing
> `a_n = a_(n-1) - 0.10` instead of `a_n = a_(n-1) * 0.90` is one of the most common packet-style
> mistakes — it turns an exponential (geometric) situation into a linear (arithmetic) one.

## 4. Series (Sums of Sequences)

> Not yet part of the assigned packet as of this transcription — the packet covers sequences
> only. Keeping this section for when the class reaches summation/series, since it's the
> natural next step after sequences in every standard Algebra II sequence-of-topics.

A **series** is the sum of the terms of a sequence. `S_n` denotes the sum of the first `n` terms.

### Sigma (Summation) Notation

```
  n
  Σ  a_k   =  a_1 + a_2 + ... + a_n
 k=1
```

- The variable under Σ (here `k`) is the **index of summation**.
- The number below Σ is the **lower limit** (starting value); above Σ is the **upper limit**.

### Arithmetic Series

Sum of the first `n` terms of an arithmetic sequence:

```
S_n = n/2 * (a_1 + a_n)
S_n = n/2 * (2a_1 + (n-1)d)
```

(Both forms are equivalent — the first uses the first and last term; the second uses only `a_1` and `d`.)

**Example**: Sum of `1 + 2 + 3 + ... + 100`: `a_1 = 1, a_n = 100, n = 100` →
`S_100 = 100/2 * (1 + 100) = 50 * 101 = 5050`.

### Geometric Series

Sum of the first `n` terms of a geometric sequence (`r ≠ 1`):

```
S_n = a_1 * (1 - r^n) / (1 - r)
```

**Example**: `2 + 6 + 18 + 54 + 162` (5 terms, `a_1 = 2, r = 3`):
`S_5 = 2 * (1 - 3^5)/(1 - 3) = 2 * (1 - 243)/(-2) = 2 * (-242)/(-2) = 242`.

### Infinite Geometric Series

If `|r| < 1`, the infinite sum converges:

```
S = a_1 / (1 - r)
```

If `|r| ≥ 1`, the series **diverges** (no finite sum).

**Example**: `1 + 1/2 + 1/4 + 1/8 + ...` → `a_1 = 1, r = 1/2` → `S = 1 / (1 - 1/2) = 2`.

## 5. Special Sequences & Related Ideas

- **Fibonacci-style recursive sequences**: `a_n = a_(n-1) + a_(n-2)` (each term depends on the
  two before it). This is exactly the packet's example (D) of a sequence with a recursive rule
  but *no* simple explicit formula.
- **Sequences as functions**: domain is the positive integers (or a subset), which is why
  sequence notation (`a_n`) parallels function notation (`f(n)`) — the packet uses both
  interchangeably (`a_n` and `f(n)` mean the same thing).
- **Partial sums**: `S_n` as a sequence itself — useful for seeing whether a series appears to converge.

## 6. Word Problems: the Packet's 4-Step Procedure

The teacher-made word-problem sheet ("Arithmetic and Geometric Sequence Word Problems
Practice") requires this exact procedure, and says explicitly: **"All final solutions MUST use
the formula"** — no counting up by hand once you have the tools.

1. **(a) Classify.** Is this arithmetic or geometric? *How do you know* — is something being
   added/subtracted the same amount each step, or multiplied by the same factor?
2. **(b) Write the explicit formula.** Identify `a_1` and `d` (or `r`) from the problem and
   explain where each number came from.
3. **(c) Identify `n` and solve.** Figure out which term number you actually need — this is
   often the step that trips people up (see the "off-by-one" and "steps between terms" traps in
   §9 below) — then plug into the explicit formula.
4. **(d) Answer in a sentence.** State the answer back in the context of the problem, with units.

**Worked example** (packet-style): *A ball is dropped and bounces to 85% of its previous height
each time. Starting height 15 ft — how high does it rebound after the 3rd bounce?*
- (a) Geometric — each bounce multiplies the height by a constant factor (0.85), not a constant
  amount.
- (b) `a_1 = 15` (the *drop* height, before any bounce) and `r = 0.85`, so
  `a_n = 15 * (0.85)^(n-1)`.
- (c) The "3rd bounce" is the 4th term of this sequence if `a_1` is the initial drop (bounce 1 =
  `a_2`, bounce 2 = `a_3`, bounce 3 = `a_4`) — this indexing choice is exactly the kind of
  "steps between terms" trap worth double-checking against the problem's own wording. Using
  `n = 4`: `a_4 = 15 * (0.85)^3 = 15 * 0.614125 ≈ 9.2`.
- (d) The ball rebounds to about 9.2 feet after its third bounce.

## 7. Translating Between Representations

Another packet-emphasized skill: going from *any one* of {sequence of numbers, table, word
context, dot/figure pattern, graph} to both the recursive **and** explicit formulas, and to a
graph. A few things worth remembering:

- A **table** (`Time` vs. `Value`) is read the same way as a list of terms — check whether
  consecutive outputs share a common difference (arithmetic) or common ratio (geometric).
- A **dot/figure pattern** (e.g. Day 1 → 6 dots, Day 2 → 12 dots, Day 3 → 18 dots) is arithmetic
  if it grows by the same *number of dots* each step, geometric if it grows by the same
  *factor*. Two visually similar patterns can be different types — the packet deliberately
  pairs a "+6 dots/day" arithmetic pattern next to a "×2/day" geometric pattern that looks
  almost identical at a glance.
- **Graphing a sequence**: plot points `(n, a_n)` — only the *dots*, never a connected line,
  since the domain is discrete (whole numbers only). An arithmetic sequence's points lie on a
  line; a geometric sequence's points lie on an exponential curve.
- **Domain/range in context**: e.g. "Laura withdraws $50/month from a $600 account" — the
  domain is meaningful only while the account has money left (not all positive integers
  forever), so state the domain/range as bounded by the context, not just "all positive
  integers."

## 8. Quick Reference

| | Arithmetic | Geometric |
|---|---|---|
| Constant | common difference `d` | common ratio `r` |
| Recursive | `a_n = a_(n-1) + d` | `a_n = a_(n-1) * r` |
| Explicit | `a_n = a_1 + (n-1)d` | `a_n = a_1 * r^(n-1)` |
| Function family | linear | exponential |
| Finite sum | `S_n = n/2 (a_1 + a_n)` | `S_n = a_1(1 - r^n)/(1 - r)` |
| Infinite sum | never converges (unless `d = 0`) | converges to `a_1/(1-r)` when `|r| < 1` |

## 9. Practice Problems

1. Find the explicit formula for the arithmetic sequence `7, 3, -1, -5, ...`
2. Find the 15th term of the geometric sequence with `a_1 = 5, r = -2`.
3. Evaluate: `Σ (k=1 to 8) (2k + 1)`
4. Find the sum of the first 12 terms of `10, 15, 20, 25, ...`
5. A ball is dropped from 10 ft and bounces back to 60% of its previous height each time. Find the total vertical distance it travels (infinite geometric series, sum the bounces then double for up+down, adjusting for the initial drop).
6. Does `Σ (k=1 to ∞) 5 * (3/4)^k` converge? If so, find its sum.
7. Write the recursive formula for `100, 90, 80, 70, ...` using `a(1)` / `a(n)` notation.
8. A car worth $17,000 depreciates 10% each year. Write the recursive formula for its value.
   What's the trap to avoid?
9. Fill in the missing terms of the geometric sequence `2, __, __, __, 162` and state `r`.
10. Sequence `0, 1, 1, 2, 3, 5, 8, ...` — arithmetic, geometric, or neither? Can you write an
    explicit formula for it?

<details>
<summary>Answers</summary>

1. `a_n = 7 - 4(n-1) = -4n + 11`
2. `a_15 = 5 * (-2)^14 = 5 * 16384 = 81920`
3. `Σ(2k+1)` for k=1..8 = `(3+5+7+9+11+13+15+17) = 80`
4. `a_1=10, d=5, n=12` → `S_12 = 12/2*(2*10+11*5) = 6*(20+55) = 6*75 = 450`
5. Distance = `10 + 2*10*(0.6)/(1-0.6) = 10 + 2*10*1.5 = 10 + 30 = 40` ft
6. `r = 3/4`, `|r|<1` so it converges: `S = 5*(3/4) / (1 - 3/4) = 3.75/0.25 = 15`
7. `a(1) = 100, a(n) = a(n-1) - 10`
8. `a(1) = 17000, a(n) = a(n-1) * 0.90`. The trap: writing `a(n) = a(n-1) - 0.10` (subtracting
   the percent as if it were a flat amount) turns a geometric/exponential situation into an
   arithmetic/linear one — a 10% *decrease* means *multiplying* by 0.90, not subtracting 0.10.
9. 4 steps, `r^4 = 162/2 = 81` → `r = 3`; terms `2, 6, 18, 54, 162`.
10. Neither — the difference isn't constant (`1, 0, 1, 1, 2, 3`) and neither is the ratio. It
    *does* have a recursive formula (`a(1)=0, a(2)=1, a(n) = a(n-1) + a(n-2)`), but no simple
    one-step explicit formula — exactly the case the packet warns "it is not possible to write
    an explicit rule."

</details>

## 10. Most Frequently Missed on SAT/ACT

Sequence questions are a small but consistent slice of both tests, and they're missed disproportionately often relative to how few points they're worth. The ACT tests them fairly predictably (usually 1-2 questions, often placed in the harder last third of the section); the SAT (digital, Advanced Math domain) is less consistent — some students see one or two, some see none at all. Both tests keep sequences short (12 terms or fewer) so a problem is always solvable by brute force, but knowing the formulas above is much faster. One SAT-specific quirk: the finite geometric series sum formula (`S_n = a_1(1-r^n)/(1-r)`) isn't tested there — a "sum" question on the SAT is either arithmetic or a list short enough to just add by hand. The ACT will test sums of both types.

**Common traps:**

- **Difference vs. ratio.** Seeing a sequence like `2, 6, 18, 54` and subtracting consecutive terms out of habit instead of dividing — subtracting gives a "common difference" that isn't actually constant (`4, 12, 36`), which should be the tip-off that it's geometric, not arithmetic.
- **Off-by-one exponent.** Writing `a_n = a_1 * r^n` instead of `a_1 * r^(n-1)`. The first term is zero multiplications by `r`, so the exponent always lags `n` by one — e.g. `a_1 = a_1 * r^0`, not `r^1`.
- **Infinite sum without checking convergence.** Plugging straight into `S = a_1/(1-r)` without confirming `|r| < 1` first. If `|r| ≥ 1` the series diverges and has no finite sum — but the formula still spits out a number, so a careless answer looks just as "confident" as a correct one.
- **Miscounting steps between non-consecutive terms.** Given, say, the 6th and 11th terms and asked for `d` or an earlier term, it's easy to treat them as 4 or 6 steps apart instead of the correct 5 (`11 - 6 = 5`). Always subtract the term numbers, don't just eyeball it.
- **Percent change written as subtraction.** Same trap as packet problem 8 above — "decreases by 10%" means multiply by `0.90` each step (geometric), not subtract `0.10` (which would be arithmetic and wrong).

**Time management:** Sequence problems tend to run longer than the section average per question on both tests. If the pattern doesn't click within the first ~20-30 seconds, skip it and come back — don't let one problem eat time from easier ones later in the section.

1. The 4th term of a geometric sequence is 16 and the 7th term is 128. What is the common ratio?
2. Given `Σ (k=1 to ∞) 8 * (1.5)^k`, what is the sum of the series?

<details>
<summary>Answers</summary>

1. `r`: 7th and 4th terms are 3 steps apart, so `128 = 16 * r^3` → `r^3 = 8` → `r = 2`. Answering `r = 128/16 = 8` mistakes "steps apart" (treats them as 1 step apart) for the miscounting trap above; answering `r = 128 - 16` would be the difference/ratio mix-up.
2. The series **diverges** — `r = 1.5`, and `|r| ≥ 1`, so there is no finite sum. Plugging into `S = a_1/(1-r) = 8/(1-1.5) = -16` anyway is exactly the "forgot to check convergence" trap; it produces a clean-looking wrong answer.

</details>
