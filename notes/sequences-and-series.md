# Sequences and Series

Algebra II study notes. Covers arithmetic and geometric sequences and
series, summation notation, and infinite geometric series.

---

## 1. Sequences: the basics

A **sequence** is an ordered list of numbers, called **terms**, usually
written `a_1, a_2, a_3, ..., a_n, ...`.

- `a_n` (or `a(n)`) denotes the **n-th term**, a function of the position
  `n` (`n` is a positive integer: 1, 2, 3, ...).
- A sequence can be **finite** (stops at some last term) or **infinite**
  (continues forever).
- Two ways to define a sequence:
  - **Explicit (closed) formula**: `a_n` written directly in terms of `n`.
    Example: `a_n = 3n - 1` gives 2, 5, 8, 11, ...
  - **Recursive formula**: each term defined using the previous term(s),
    plus a starting value. Example: `a_1 = 2, a_n = a_(n-1) + 3` gives the
    same sequence 2, 5, 8, 11, ...

Recursive formulas are natural for describing *how* a sequence grows step
by step; explicit formulas let you jump straight to any term without
computing all the ones before it.

---

## 2. Arithmetic sequences

An **arithmetic sequence** has a **constant difference** `d` between
consecutive terms: `a_n - a_(n-1) = d` for every `n`.

- **Recursive formula**: `a_1 = a_1, a_n = a_(n-1) + d`
- **Explicit formula**: `a_n = a_1 + (n - 1)d`

`d` can be positive (increasing), negative (decreasing), or zero
(constant sequence).

**Example.** 7, 4, 1, -2, -5, ...
Here `a_1 = 7` and `d = -3`, so `a_n = 7 + (n - 1)(-3) = 10 - 3n`.
Check: `a_5 = 10 - 15 = -5`. ✓

**Finding a term far out.** For 5, 9, 13, ... find `a_20`.
`d = 4`, `a_1 = 5`, so `a_20 = 5 + (20 - 1)(4) = 5 + 76 = 81`.

**Arithmetic mean.** If `a`, `b`, `c` are consecutive arithmetic terms,
`b = (a + c) / 2` — the middle term is the average of its neighbors.

---

## 3. Arithmetic series

An **arithmetic series** is the sum of the terms of an arithmetic
sequence. The sum of the first `n` terms is denoted `S_n`.

**Sum formula** (average of first and last term, times number of terms):

```
S_n = n * (a_1 + a_n) / 2
```

Equivalently, substituting `a_n = a_1 + (n-1)d`:

```
S_n = n/2 * (2a_1 + (n - 1)d)
```

**Example.** Sum the first 30 terms of 4, 10, 16, 22, ...
`d = 6`, `a_1 = 4`, `a_30 = 4 + 29(6) = 178`.
`S_30 = 30 * (4 + 178) / 2 = 15 * 182 = 2730`.

**Classic trick (Gauss's method).** Sum `1 + 2 + ... + 100`: pair the
first and last term (`1 + 100`), second and second-to-last (`2 + 99`),
etc. Each pair sums to 101, and there are 50 pairs: `50 * 101 = 5050`.
This is exactly where the `n(a_1 + a_n)/2` formula comes from.

---

## 4. Geometric sequences

A **geometric sequence** has a **constant ratio** `r` between consecutive
terms: `a_n / a_(n-1) = r` for every `n` (`r ≠ 0`).

- **Recursive formula**: `a_1 = a_1, a_n = a_(n-1) * r`
- **Explicit formula**: `a_n = a_1 * r^(n-1)`

Behavior depends on `r`:
- `|r| > 1`: terms grow without bound in magnitude.
- `0 < |r| < 1`: terms shrink toward 0.
- `r < 0`: terms alternate in sign.
- `r = 1`: constant sequence.

**Example.** 3, 6, 12, 24, ... has `a_1 = 3`, `r = 2`, so
`a_n = 3 * 2^(n-1)`. Then `a_8 = 3 * 2^7 = 3 * 128 = 384`.

**Example (fractional ratio).** 81, -27, 9, -3, ... has `r = -1/3`, so
`a_n = 81 * (-1/3)^(n-1)`.

**Geometric mean.** If `a`, `b`, `c` are consecutive geometric terms
(same sign), `b = sqrt(a * c)`.

---

## 5. Geometric series (finite)

The sum of the first `n` terms of a geometric sequence, for `r ≠ 1`:

```
S_n = a_1 * (1 - r^n) / (1 - r)     (or equivalently a_1(r^n - 1)/(r - 1))
```

**Example.** Sum the first 10 terms of 5, 10, 20, 40, ...
`a_1 = 5`, `r = 2`:
`S_10 = 5 * (1 - 2^10) / (1 - 2) = 5 * (1 - 1024) / (-1) = 5 * 1023 = 5115`.

**Example (r a fraction).** Sum the first 6 terms of 8, 4, 2, 1, ...
`a_1 = 8`, `r = 1/2`:
`S_6 = 8 * (1 - (1/2)^6) / (1 - 1/2) = 8 * (63/64) / (1/2) = 8 * (63/32) = 63/4`.

---

## 6. Summation (sigma) notation

```
  n
  Σ  a_k   =  a_m + a_(m+1) + ... + a_n
 k=m
```

`k` is the index of summation, `m` is the lower limit, `n` is the upper
limit, and `a_k` is the formula for each term.

**Examples.**
- `Σ_{k=1}^{5} k^2 = 1 + 4 + 9 + 16 + 25 = 55`
- `Σ_{k=1}^{4} (3k - 1) = 2 + 5 + 8 + 11 = 26` (an arithmetic series)
- `Σ_{k=0}^{4} 2 * 3^k = 2 + 6 + 18 + 54 + 162 = 242` (a geometric series)

**Useful properties.**
- `Σ (a_k + b_k) = Σ a_k + Σ b_k`
- `Σ c * a_k = c * Σ a_k` for a constant `c`
- `Σ_{k=1}^{n} c = c*n` (summing a constant `n` times)

Converting between sigma notation and the `S_n` formulas above is a
common Algebra II skill: recognize whether the terms form an arithmetic
or geometric pattern, identify `a_1`, `d` or `r`, and `n`, then apply the
matching formula instead of adding term by term.

---

## 7. Infinite geometric series

For an infinite geometric series `a_1 + a_1 r + a_1 r^2 + ...`:

- If `|r| < 1`, the series **converges** to a finite sum:
  ```
  S = a_1 / (1 - r)
  ```
- If `|r| >= 1`, the series **diverges** (no finite sum exists).

**Example.** `4 + 2 + 1 + 1/2 + ...` has `a_1 = 4`, `r = 1/2`.
`|r| < 1`, so `S = 4 / (1 - 1/2) = 4 / (1/2) = 8`.

**Example (repeating decimal as a series).** `0.6666... = 6/10 + 6/100 +
6/1000 + ...` is geometric with `a_1 = 6/10`, `r = 1/10`.
`S = (6/10) / (1 - 1/10) = (6/10) / (9/10) = 6/9 = 2/3`. This is the
standard technique for converting any repeating decimal to a fraction.

**Example (diverges).** `2 + 6 + 18 + 54 + ...` has `r = 3`, and
`|r| = 3 >= 1`, so the series has no finite sum — it diverges.

---

## 8. Quick reference

| | Sequence (n-th term) | Series (sum of first n terms) |
|---|---|---|
| Arithmetic | `a_n = a_1 + (n-1)d` | `S_n = n(a_1 + a_n)/2` |
| Geometric | `a_n = a_1 * r^(n-1)` | `S_n = a_1(1 - r^n)/(1 - r)`, `r ≠ 1` |
| Infinite geometric | — | `S = a_1/(1 - r)`, only if `\|r\| < 1` |

---

## 9. Practice problems

1. Find `a_15` for the arithmetic sequence 12, 17, 22, 27, ...
2. Find the sum of the first 40 terms of the arithmetic sequence with
   `a_1 = -6` and `d = 5`.
3. Find `a_9` for the geometric sequence 2, -6, 18, -54, ...
4. Find the sum of the first 7 terms of 1, 3, 9, 27, ...
5. Evaluate `Σ_{k=1}^{6} (2k + 1)`.
6. Does `Σ_{k=1}^{∞} 5 * (2/3)^k` converge? If so, find its sum.
7. Write `0.4545...` as a fraction using an infinite geometric series.

### Solutions

1. `d = 5`, `a_1 = 12`. `a_15 = 12 + 14(5) = 82`.
2. `a_40 = -6 + 39(5) = 189`. `S_40 = 40(-6 + 189)/2 = 20(183) = 3660`.
3. `r = -3`, `a_1 = 2`. `a_9 = 2 * (-3)^8 = 2 * 6561 = 13122`.
4. `r = 3`, `a_1 = 1`. `S_7 = 1*(1 - 3^7)/(1 - 3) = (1 - 2187)/(-2) = 1093`.
5. Terms: 3, 5, 7, 9, 11, 13 (arithmetic, `a_1=3, d=2, n=6`).
   `S_6 = 6(3 + 13)/2 = 48`.
6. `r = 2/3`, `|r| < 1`, so it converges. First term (`k=1`) is
   `5*(2/3) = 10/3`. `S = (10/3) / (1 - 2/3) = (10/3)/(1/3) = 10`.
7. `0.4545... = 45/100 + 45/10000 + ...`, `a_1 = 45/100`, `r = 1/100`.
   `S = (45/100)/(1 - 1/100) = (45/100)/(99/100) = 45/99 = 5/11`.
