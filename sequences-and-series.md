# Sequences and Series — Algebra II Study Notes

[Take the interactive quiz →](quizzes/sequences-and-series.html)

> Per the course syllabus ([course-info.md](course-info.md)), "Sequence and Functions" is
> Unit 1 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology materials page
> itself couldn't be reached from this environment (NMUSD login required, domain blocked
> by network egress rules), so the syllabus's specific reading/assignment list for this unit
> isn't reflected here — these notes cover the standard curriculum for the topic. Paste in
> specifics from Schoology (subtopic order, vocab list, assigned problems) to refine further.

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

## 10. Sigma Notation Properties, Power Sums, and Telescoping Series

These go a level past the basic arithmetic/geometric formulas above — they let you evaluate sums that aren't purely arithmetic or geometric term-by-term.

### Properties of Sigma Notation

For any constant `c` and sequences `a_k`, `b_k`:

```
Σ (k=1 to n) c        = c * n
Σ (k=1 to n) c*a_k    = c * Σ a_k
Σ (k=1 to n) (a_k + b_k) = Σ a_k + Σ b_k
```

In words: constants factor out of a sum, and a sum of sums splits into separate sums. This is just the distributive property applied to addition — it's what lets you break a complicated sum into pieces you already have formulas for.

### Closed Forms for Power Sums

Three sums come up often enough to memorize:

```
Σ (k=1 to n) k   = n(n+1)/2
Σ (k=1 to n) k^2 = n(n+1)(2n+1)/6
Σ (k=1 to n) k^3 = [n(n+1)/2]^2   (i.e., (Σk)^2 — the sum of cubes is the square of the sum of the first powers)
```

**Example**: Evaluate `Σ (k=1 to 10) (k^2 - 2k + 3)`.

Split it using the properties above: `Σk^2 - 2Σk + Σ3`.
- `Σk^2 = 10*11*21/6 = 385`
- `2Σk = 2*(10*11/2) = 2*55 = 110`
- `Σ3 = 3*10 = 30`

Total: `385 - 110 + 30 = 305`.

### Telescoping Series

A **telescoping series** is one where, after rewriting each term (often via partial fractions), consecutive terms cancel out, leaving only a few surviving pieces — like closing a telescope.

**Pattern**: `Σ (k=1 to n) [f(k) - f(k+1)] = f(1) - f(n+1)` — every middle term cancels with the next term's leading piece.

**Example**: Evaluate `Σ (k=1 to n) 1/(k(k+1))`.

Partial fractions: `1/(k(k+1)) = 1/k - 1/(k+1)`. So the sum telescopes:

```
(1/1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + ... + (1/n - 1/(n+1))
= 1 - 1/(n+1) = n/(n+1)
```

Check with `n = 5`: direct addition gives `1/2 + 1/6 + 1/12 + 1/20 + 1/30 = 5/6`, matching `n/(n+1) = 5/6`. ✓

### Practice Problems

1. Evaluate `Σ (k=1 to 6) (3k^2 - k)` using the closed forms above.
2. Verify that `Σ (k=1 to 8) k^3 = (Σ (k=1 to 8) k)^2` by computing both sides.
3. Evaluate `Σ (k=1 to 4) 1/((k+1)(k+2))` by rewriting the general term with partial fractions and telescoping.

<details>
<summary>Answers</summary>

1. `Σk^2 (n=6) = 6*7*13/6 = 91`, `Σk (n=6) = 21`. So `3(91) - 21 = 273 - 21 = 252`.
2. `Σk (n=8) = 8*9/2 = 36`, so `(Σk)^2 = 1296`. `Σk^3 = [8*9/2]^2 = 36^2 = 1296`. They match — direct addition of `1+8+27+64+125+216+343+512` also gives `1296`.
3. `1/((k+1)(k+2)) = 1/(k+1) - 1/(k+2)`. Telescoping from `k=1` to `4`: `1/2 - 1/6 = 1/3`. Direct check: `1/6 + 1/12 + 1/20 + 1/30 = 10/60+5/60+3/60+2/60 = 20/60 = 1/3`. ✓

</details>
