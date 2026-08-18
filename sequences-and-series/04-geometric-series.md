# Geometric Series

A **geometric series** is the sum of a geometric sequence.

## Finite geometric series

Sum of the first `n` terms of a geometric sequence with first term `a1` and
common ratio `r` (`r ≠ 1`):

```
S_n = a1 · (1 - r^n) / (1 - r)
```

(equivalently `a1 · (r^n - 1) / (r - 1)` — same value, just avoids a
negative-over-negative if `r > 1`).

**Example.** Find the sum of the first 8 terms of `3, 6, 12, 24, ...`
(`a1 = 3`, `r = 2`).

```
S_8 = 3 · (1 - 2^8) / (1 - 2) = 3 · (1 - 256) / (-1) = 3 · 255 = 765
```

**Example.** Find `Σ_{k=1}^{6} 5·(1/2)^(k-1)` (`a1 = 5`, `r = 1/2`, `n = 6`).

```
S_6 = 5 · (1 - (1/2)^6) / (1 - 1/2) = 5 · (1 - 1/64) / (1/2)
    = 5 · (63/64) · 2 = 630/64 = 9.84375
```

## Infinite geometric series

Now let `n → ∞`. What happens to `r^n`?

- If `|r| < 1`, then `r^n → 0` as `n → ∞`, so the partial sums approach a
  finite limit. The series **converges**:
  ```
  S = a1 / (1 - r)          (only valid when |r| < 1)
  ```
- If `|r| ≥ 1`, then `r^n` does not shrink to 0 (it grows, or oscillates
  between ±same size), so the partial sums never settle down. The series
  **diverges** — it has no finite sum.

**Example.** `4 + 2 + 1 + 1/2 + 1/4 + ...` has `a1 = 4`, `r = 1/2`.
Since `|r| < 1`, it converges:
```
S = 4 / (1 - 1/2) = 4 / (1/2) = 8
```

**Example.** `1 + 3 + 9 + 27 + ...` has `r = 3`. Since `|r| ≥ 1`, this
series diverges — it has no sum (it grows without bound).

**Repeating decimals as infinite geometric series.** `0.777... = 7/10 + 7/100
+ 7/1000 + ...` is geometric with `a1 = 7/10`, `r = 1/10`:
```
S = (7/10) / (1 - 1/10) = (7/10) / (9/10) = 7/9
```
confirming `0.777... = 7/9`.

## Practice

1. Find `S_10` for the geometric series with `a1 = 2`, `r = 3`.
2. Evaluate `Σ_{k=1}^{5} 100·(0.1)^(k-1)`.
3. Does `6 - 3 + 1.5 - 0.75 + ...` converge? If so, find its sum.
4. Does `2 + 4 + 8 + 16 + ...` converge? Explain why or why not.
5. Write `0.454545...` as a fraction using an infinite geometric series.

*(Answers in `05-answer-key.md`.)*
