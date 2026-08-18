# Sequences and Series — Algebra II Study Notes

> Note: The Schoology course page (nmusd.schoology.com/course/8478718366/materials)
> could not be reached from this environment — it requires an NMUSD login and the
> domain is blocked by network egress rules here. These notes cover the standard
> Algebra II "Sequences and Series" unit content instead. Cross-check unit numbers
> and specific problem sets against what your teacher posts on Schoology.

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
