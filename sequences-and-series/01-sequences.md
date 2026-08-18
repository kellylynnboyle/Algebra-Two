# Sequences

A **sequence** is an ordered list of numbers, called **terms**. Each term has a
position, usually written with a subscript: `a1, a2, a3, ..., an, ...`

- `a_n` (or `t_n`) denotes the *n*th term.
- `n` is always a positive integer (1, 2, 3, ...) unless stated otherwise.
- A sequence can be **finite** (stops after a fixed number of terms) or
  **infinite** (continues forever).

There are two standard ways to describe a sequence:

## 1. Explicit formula

Gives `a_n` directly in terms of `n`, with no reference to other terms.

```
a_n = 3n - 1        →  a1 = 2, a2 = 5, a3 = 8, a4 = 11, ...
```

To find any term, plug `n` straight into the formula — no need to know the
previous terms.

## 2. Recursive formula

Defines each term using the term(s) before it, plus one or more starting
values.

```
a1 = 2,  a_n = a_(n-1) + 3   for n ≥ 2
```

produces the same sequence: 2, 5, 8, 11, ...

To find `a_10` recursively you must first find `a_2, a_3, ..., a_9` — this is
slower than an explicit formula but is often the most natural way to describe
a pattern (especially geometric growth, Fibonacci-type sequences, etc.).

## Arithmetic sequences

A sequence is **arithmetic** if consecutive terms differ by a constant amount,
the **common difference** `d`.

```
d = a_n - a_(n-1)          (constant for all n)
```

- Recursive form: `a_n = a_(n-1) + d`
- Explicit form:  `a_n = a1 + (n - 1)d`

**Example.** 4, 9, 14, 19, ... has `a1 = 4`, `d = 5`.
Explicit formula: `a_n = 4 + (n-1)(5) = 5n - 1`.
So `a_20 = 5(20) - 1 = 99`.

**Recognizing arithmetic sequences:** if you subtract consecutive terms and
always get the same number, it's arithmetic. Graphed as points `(n, a_n)`,
an arithmetic sequence's points lie on a straight line with slope `d` — this
is why the explicit formula looks like a linear function.

## Geometric sequences

A sequence is **geometric** if consecutive terms have a constant ratio, the
**common ratio** `r`.

```
r = a_n / a_(n-1)          (constant for all n, r ≠ 0)
```

- Recursive form: `a_n = a_(n-1) · r`
- Explicit form:  `a_n = a1 · r^(n-1)`

**Example.** 3, 6, 12, 24, ... has `a1 = 3`, `r = 2`.
Explicit formula: `a_n = 3 · 2^(n-1)`.
So `a_7 = 3 · 2^6 = 192`.

**Recognizing geometric sequences:** divide consecutive terms; if the ratio
is always the same, it's geometric. Geometric sequences grow (or shrink)
exponentially — `|r| > 1` means growth, `0 < |r| < 1` means decay toward 0,
and negative `r` makes the terms alternate in sign.

## Quick comparison

| | Arithmetic | Geometric |
|---|---|---|
| Constant | common difference `d` (add/subtract) | common ratio `r` (multiply/divide) |
| Recursive | `a_n = a_(n-1) + d` | `a_n = a_(n-1) · r` |
| Explicit | `a_n = a1 + (n-1)d` | `a_n = a1 · r^(n-1)` |
| Shape of graph | linear | exponential |

## Practice

1. Find `a1`, `d` (or `r`), and the explicit formula for: `7, 11, 15, 19, ...`
2. Find `a1`, `d` (or `r`), and the explicit formula for: `100, 50, 25, 12.5, ...`
3. A sequence is defined recursively by `a1 = -5, a_n = a_(n-1) + 4`. Find `a_15`.
4. A sequence is defined recursively by `a1 = 2, a_n = -3 · a_(n-1)`. Find `a_6`.
5. Is `2, 5, 10, 17, 26, ...` arithmetic, geometric, or neither? Explain.

*(Answers in `05-answer-key.md`.)*
