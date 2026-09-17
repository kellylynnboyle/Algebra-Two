# Sequences and Series — Algebra II Study Notes

[Take the interactive quiz →](quizzes/sequences-and-series.html)

> Per the course syllabus ([course-info.md](course-info.md)), "Sequence and Functions" is
> Unit 1 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology materials page
> itself still can't be reached from this environment (NMUSD login required, domain blocked
> by network egress rules). However, the actual Unit 1 classwork packet (26 scanned pages,
> `scan_20260819030552.pdf`) was uploaded to this repo and has been reviewed — it's a mix of
> IMP, Mathematics Vision Project, McDougal Littell, and Kuta Software worksheets. That packet
> is almost entirely about **recursive and explicit formulas for sequences** (using `a(1)`,
> `a(n)`, `a(n-1)` notation) built up from dot-pattern figures and word problems — it does
> *not* cover sigma notation or series sums. Section 1a below reflects that packet's actual
> approach; the series material further down (sections 4+) is standard Algebra II curriculum
> kept here in case it's covered later in the unit or on assessments, but hasn't been confirmed
> against Schoology yet.

## 1. Sequences

A **sequence** is an ordered list of numbers (terms), often written `a_1, a_2, a_3, ..., a_n, ...`.

- **Finite sequence**: has a last term.
- **Infinite sequence**: continues forever.
- `a_n` (or `a(n)`) denotes the *n*-th term.

### Explicit vs. Recursive Formulas

- **Explicit formula**: gives `a_n` directly as a function of `n`.
  Example: `a_n = 3n - 1` → `a_1 = 2, a_2 = 5, a_3 = 8, ...`
- **Recursive formula**: gives the first term(s) and a rule relating each term to the previous one(s).
  Example: `a_1 = 2, a_n = a_(n-1) + 3` produces the same sequence as above.

To convert recursive → explicit (or vice versa), look for a constant *difference* (arithmetic) or constant *ratio* (geometric) between consecutive terms.

## 1a. Recursive vs. Explicit Formulas (as actually taught in this class)

The classwork packet builds sequences up from **patterns** (dot figures) rather than starting
from the formulas directly, and uses `a(1)`, `a(n)`, `a(n-1)` function-style notation as much as
(or more than) subscript notation `a_1`, `a_n`, `a_(n-1)` — they mean the same thing:

| Notation | Meaning |
|---|---|
| `a(1)` or `a_1` | 1st term of the sequence |
| `a(n)` or `a_n` | *n*th term of the sequence |
| `a(n-1)` or `a_(n-1)` | the term right before `a(n)` |

A **recursive formula** states the first term, then defines each term in terms of the one(s)
before it — e.g. `a(1) = 13, a(n) = a(n-1) + 4`. It's the natural way to describe a pattern
(each new figure = previous figure + a fixed number of dots), but to get to the 100th term you'd
have to grind through every term before it.

An **explicit formula** gives `a(n)` directly in terms of `n` — e.g. `a(n) = 13 + 4(n-1)`. The
packet builds this by *expanding* the recursive steps in a table:

| Fig # | Dots | Expand |
|---|---|---|
| 1 | 13 | `13` |
| 2 | 17 | `13 + 4` |
| 3 | 21 | `13 + 4 + 4` |
| 4 | 25 | `13 + 4 + 4 + 4` |
| n | | `13 + 4(n-1)` |

The key move: figure `n` has had the common difference added `(n-1)` times, not `n` times,
since the first term gets zero additions.

**One recursive equation doesn't uniquely determine a sequence** — `a(n) = a(n-1) + 3` fits
`2, 5, 8, 11, ...` just as well as `21, 24, 27, 30, ...`. You always need the starting value
too.

### Word problems: write both, then interpret

A recurring problem type gives a real-world setup and asks for the recursive formula, the
explicit formula, *and* a sentence explaining what the recursive formula means in context.
For example: a paycheck sequence where `a(n) = a(n-1) + 225` means "each week's balance is
last week's balance plus another $225 paycheck," while a car-depreciation sequence
`a(n) = a(n-1) · 0.9` means "each year's value is 90% of last year's value" (10% depreciation).
Watch for growth/decay problems phrased as a *percent change* — that always signals geometric
(multiply by `1 ± rate`), not arithmetic (add/subtract a flat amount).

**Practice:**

1. A tree is 4 ft tall when planted and grows 1.5 ft per year. Write a recursive formula for
   its height, then an explicit formula, then find its height after 12 years.
2. A $5,000 investment loses 8% of its value every year it's left in a bad fund. Write a
   recursive formula for its value, then find its value after 6 years.
3. A figure pattern has 2 dots in figure 1, and each new figure adds 3 more dots than the
   previous figure added (i.e., the *number added* is itself increasing by 3 each time — figure
   1→2 adds 3, figure 2→3 adds 6, figure 3→4 adds 9, ...). Is this arithmetic, geometric, or
   neither? Explain.

<details>
<summary>Answers</summary>

1. Recursive: `a(1) = 4, a(n) = a(n-1) + 1.5`. Explicit: `a(n) = 4 + 1.5(n-1)`.
   `a(12) = 4 + 1.5(11) = 4 + 16.5 = 20.5` ft.
2. Recursive: `a(1) = 5000, a(n) = a(n-1) · 0.92`. `a(6) = 5000(0.92)^5 ≈ 3269.98`, so about
   $3,269.98 after 6 years (note `n=6` uses exponent `5`, since `a(1)` is the starting amount
   before any decay has been applied).
3. **Neither.** The difference between consecutive terms isn't constant (it's `3, 6, 9, ...`,
   itself an arithmetic sequence), so there's no single common difference — and there's no
   common ratio either since it's not multiplicative growth. This is a classic "sequence of
   differences" trap: don't assume arithmetic just because something is changing steadily by a
   *pattern* rather than a *constant amount*.

</details>

## 2. Arithmetic Sequences

A sequence where each term differs from the previous by a constant **common difference** `d`.

- Recursive: `a_n = a_(n-1) + d`
- Explicit: `a_n = a_1 + (n - 1)d`
- `d = a_n - a_(n-1)` (constant for all `n`)

**Example**: `4, 9, 14, 19, ...` → `a_1 = 4`, `d = 5`, so `a_n = 4 + 5(n - 1) = 5n - 1`.

### Arithmetic Means
The terms between two given terms of an arithmetic sequence are **arithmetic means** — they fill in the sequence so the common difference stays constant.

## 3. Geometric Sequences

A sequence where each term is the previous term times a constant **common ratio** `r`.

- Recursive: `a_n = a_(n-1) * r`
- Explicit: `a_n = a_1 * r^(n-1)`
- `r = a_n / a_(n-1)` (constant for all `n`)

**Example**: `3, 6, 12, 24, ...` → `a_1 = 3`, `r = 2`, so `a_n = 3 * 2^(n-1)`.

If `|r| < 1`, the terms shrink toward 0. If `|r| > 1`, they grow without bound. If `r < 0`, terms alternate sign.

## 4. Series (Sums of Sequences)

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

- **Fibonacci-style recursive sequences**: `a_n = a_(n-1) + a_(n-2)` (each term depends on the two before it).
- **Sequences as functions**: domain is the positive integers (or a subset), which is why sequence notation (`a_n`) parallels function notation (`f(n)`).
- **Partial sums**: `S_n` as a sequence itself — useful for seeing whether a series appears to converge.

## 6. Common Problem Types

1. Given a few terms, decide arithmetic vs. geometric, find `d` or `r`, then write the explicit formula.
2. Find a specific term (e.g., the 20th term) using the explicit formula.
3. Find `n` given `a_n` (solve the explicit formula for `n`).
4. Compute a finite sum `S_n` using the arithmetic or geometric series formula.
5. Evaluate a sum written in sigma notation — expand it or plug directly into a formula.
6. Determine whether an infinite geometric series converges, and if so, find its sum.
7. Word problems: compound interest, population growth/decay, salary increases, bouncing-ball height (infinite geometric series), stacking/patterns.

## 7. Quick Reference

| | Arithmetic | Geometric |
|---|---|---|
| Constant | common difference `d` | common ratio `r` |
| Recursive | `a_n = a_(n-1) + d` | `a_n = a_(n-1) * r` |
| Explicit | `a_n = a_1 + (n-1)d` | `a_n = a_1 * r^(n-1)` |
| Finite sum | `S_n = n/2 (a_1 + a_n)` | `S_n = a_1(1 - r^n)/(1 - r)` |
| Infinite sum | never converges (unless `d = 0`) | converges to `a_1/(1-r)` when `|r| < 1` |

## 8. Practice Problems

1. Find the explicit formula for the arithmetic sequence `7, 3, -1, -5, ...`
2. Find the 15th term of the geometric sequence with `a_1 = 5, r = -2`.
3. Evaluate: `Σ (k=1 to 8) (2k + 1)`
4. Find the sum of the first 12 terms of `10, 15, 20, 25, ...`
5. A ball is dropped from 10 ft and bounces back to 60% of its previous height each time. Find the total vertical distance it travels (infinite geometric series, sum the bounces then double for up+down, adjusting for the initial drop).
6. Does `Σ (k=1 to ∞) 5 * (3/4)^k` converge? If so, find its sum.

<details>
<summary>Answers</summary>

1. `a_n = 7 - 4(n-1) = -4n + 11`
2. `a_15 = 5 * (-2)^14 = 5 * 16384 = 81920`
3. `Σ(2k+1)` for k=1..8 = `(3+5+7+9+11+13+15+17) = 80`
4. `a_1=10, d=5, n=12` → `S_12 = 12/2*(2*10+11*5) = 6*(20+55) = 6*75 = 450`
5. Distance = `10 + 2*10*(0.6)/(1-0.6) = 10 + 2*10*1.5 = 10 + 30 = 40` ft
6. `r = 3/4`, `|r|<1` so it converges: `S = 5*(3/4) / (1 - 3/4) = 3.75/0.25 = 15`

</details>

## 9. Most Frequently Missed on SAT/ACT

Sequence questions are a small but consistent slice of both tests, and they're missed disproportionately often relative to how few points they're worth. The ACT tests them fairly predictably (usually 1-2 questions, often placed in the harder last third of the section); the SAT (digital, Advanced Math domain) is less consistent — some students see one or two, some see none at all. Both tests keep sequences short (12 terms or fewer) so a problem is always solvable by brute force, but knowing the formulas above is much faster. One SAT-specific quirk: the finite geometric series sum formula (`S_n = a_1(1-r^n)/(1-r)`) isn't tested there — a "sum" question on the SAT is either arithmetic or a list short enough to just add by hand. The ACT will test sums of both types.

**Common traps:**

- **Difference vs. ratio.** Seeing a sequence like `2, 6, 18, 54` and subtracting consecutive terms out of habit instead of dividing — subtracting gives a "common difference" that isn't actually constant (`4, 12, 36`), which should be the tip-off that it's geometric, not arithmetic.
- **Off-by-one exponent.** Writing `a_n = a_1 * r^n` instead of `a_1 * r^(n-1)`. The first term is zero multiplications by `r`, so the exponent always lags `n` by one — e.g. `a_1 = a_1 * r^0`, not `r^1`.
- **Infinite sum without checking convergence.** Plugging straight into `S = a_1/(1-r)` without confirming `|r| < 1` first. If `|r| ≥ 1` the series diverges and has no finite sum — but the formula still spits out a number, so a careless answer looks just as "confident" as a correct one.
- **Miscounting steps between non-consecutive terms.** Given, say, the 6th and 11th terms and asked for `d` or an earlier term, it's easy to treat them as 4 or 6 steps apart instead of the correct 5 (`11 - 6 = 5`). Always subtract the term numbers, don't just eyeball it.

**Time management:** Sequence problems tend to run longer than the section average per question on both tests. If the pattern doesn't click within the first ~20-30 seconds, skip it and come back — don't let one problem eat time from easier ones later in the section.

1. The 4th term of a geometric sequence is 16 and the 7th term is 128. What is the common ratio?
2. Given `Σ (k=1 to ∞) 8 * (1.5)^k`, what is the sum of the series?

<details>
<summary>Answers</summary>

1. `r`: 7th and 4th terms are 3 steps apart, so `128 = 16 * r^3` → `r^3 = 8` → `r = 2`. Answering `r = 128/16 = 8` mistakes "steps apart" (treats them as 1 step apart) for the miscounting trap above; answering `r = 128 - 16` would be the difference/ratio mix-up.
2. The series **diverges** — `r = 1.5`, and `|r| ≥ 1`, so there is no finite sum. Plugging into `S = a_1/(1-r) = 8/(1-1.5) = -16` anyway is exactly the "forgot to check convergence" trap; it produces a clean-looking wrong answer.

</details>
