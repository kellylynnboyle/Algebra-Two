# Series and Sigma Notation

A **series** is the sum of the terms of a sequence. If a sequence is
`a1, a2, a3, ...`, the corresponding series is `a1 + a2 + a3 + ...`.

- A **partial sum** `S_n` is the sum of the first `n` terms:
  `S_n = a1 + a2 + ... + a_n`.
- An **infinite series** sums all the terms of an infinite sequence; whether
  that sum is a finite number depends on the sequence (see the infinite
  geometric series section).

## Sigma (summation) notation

`Σ` (capital sigma) is shorthand for "add up the terms."

```
   n
   Σ  a_k   =   a_m + a_(m+1) + ... + a_n
  k=m
```

- `k` is the **index of summation** (a dummy variable — any letter works).
- `m` is the **lower limit** (starting value of k).
- `n` is the **upper limit** (ending value of k).
- `a_k` is the formula for each term.

**Example.**
```
  5
  Σ  (2k + 1)  =  (2·1+1) + (2·2+1) + (2·3+1) + (2·4+1) + (2·5+1)
 k=1
              =  3 + 5 + 7 + 9 + 11 = 35
```

**Writing a sum in sigma notation.** For `4 + 8 + 12 + 16 + 20`, notice each
term is `4k` for `k = 1` to `5`:
```
  5
  Σ  4k  = 60
 k=1
```

## Properties of sigma notation

```
Σ c · a_k        = c · Σ a_k                (constant multiple)
Σ (a_k + b_k)    = Σ a_k + Σ b_k             (sum splits)
Σ_{k=1}^{n} c    = c · n                     (constant term, n times)
```

## Practice

1. Evaluate: `Σ_{k=1}^{4} (3k - 2)`
2. Evaluate: `Σ_{k=3}^{6} k^2`
3. Write `5 + 10 + 15 + ... + 50` using sigma notation.
4. Write `1 + 4 + 9 + 16 + 25` using sigma notation.
5. Evaluate: `Σ_{k=1}^{10} 7`

*(Answers in `05-answer-key.md`.)*
