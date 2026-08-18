# Arithmetic Series

An **arithmetic series** is the sum of an arithmetic sequence.

## Sum formula

The sum of the first `n` terms of an arithmetic sequence:

```
S_n = n/2 · (a1 + a_n)
```

("average of the first and last term, times the number of terms"). This
works because pairing the first term with the last, the second with the
second-to-last, etc., always gives the same pair-sum `a1 + a_n`.

If you don't know the last term `a_n` but do know `d`, substitute
`a_n = a1 + (n-1)d`:

```
S_n = n/2 · [2a1 + (n-1)d]
```

**Example.** Find the sum of the first 20 terms of `5, 9, 13, 17, ...`
(`a1 = 5`, `d = 4`).

```
a_20 = 5 + (20-1)(4) = 5 + 76 = 81
S_20 = 20/2 · (5 + 81) = 10 · 86 = 860
```

**Example (Gauss's trick).** `1 + 2 + 3 + ... + 100`:
`a1 = 1, a_100 = 100, n = 100`
`S_100 = 100/2 · (1 + 100) = 50 · 101 = 5050`

## Using sigma notation

An arithmetic series is often written as `Σ_{k=1}^{n} (a1 + (k-1)d)`. To
evaluate, just find `a1`, `a_n`, and `n`, then use `S_n = n/2 (a1 + a_n)`.

## Practice

1. Find the sum of the first 15 terms of `3, 8, 13, 18, ...`.
2. Find the sum of the first 30 terms of an arithmetic sequence with
   `a1 = -10` and `d = 3`.
3. Evaluate `Σ_{k=1}^{25} (4k - 3)`.
4. The 1st term of an arithmetic series is 6 and the 12th term is 61.
   Find the sum of the first 12 terms.
5. How many terms of `2 + 5 + 8 + 11 + ...` are needed for the sum to
   equal 345?

*(Answers in `05-answer-key.md`.)*
