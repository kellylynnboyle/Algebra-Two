# Polynomials — Algebra II Study Notes (Unit 2)

> Per the course syllabus ([course-info.md](course-info.md)), "Polynomials" is Unit 2 of
> Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology materials page itself
> couldn't be reached from this environment (NMUSD login required, domain blocked by
> network egress rules), so the syllabus's specific reading/assignment list for this unit
> isn't reflected here — these notes cover the standard curriculum for the topic. Paste in
> specifics from Schoology (subtopic order, vocab list, assigned problems) to refine further.

## 1. Polynomial Vocabulary

A **polynomial** is an expression made of terms with whole-number exponents on the
variable(s), combined by addition/subtraction — no variables in denominators, no negative
or fractional exponents, no variables under a radical.

- **Term**: a single piece, e.g. `5x^3`, `-2x`, `7`.
- **Coefficient**: the number multiplying the variable part of a term.
- **Degree of a term**: the exponent on the variable (for one variable).
- **Degree of a polynomial**: the highest degree among its terms.
- **Leading coefficient**: the coefficient of the highest-degree term.
- **Constant term**: the term with no variable (degree 0).
- **Standard form**: terms written in descending order of degree.

**Example**: `3x^4 - 5x^2 + 2x - 7` is already in standard form. Degree `4`, leading
coefficient `3`, constant term `-7`.

### Naming by Number of Terms

| Terms | Name |
|---|---|
| 1 | monomial |
| 2 | binomial |
| 3 | trinomial |
| 4+ | polynomial (general term) |

### Naming by Degree

| Degree | Name |
|---|---|
| 0 | constant |
| 1 | linear |
| 2 | quadratic |
| 3 | cubic |
| 4 | quartic |
| 5 | quintic |

## 2. Adding, Subtracting, and Multiplying Polynomials

**Add/subtract**: combine like terms (same variable, same exponent). For subtraction,
distribute the negative sign across every term of the polynomial being subtracted first.

**Example**: `(3x^2 - 2x + 5) + (x^2 + 4x - 1) = 4x^2 + 2x + 4`

**Example**: `(3x^2 - 2x + 5) - (x^2 + 4x - 1) = 3x^2 - 2x + 5 - x^2 - 4x + 1 = 2x^2 - 6x + 6`

**Multiply**: distribute every term of one polynomial across every term of the other, then
combine like terms. For two binomials, this is **FOIL** (First, Outer, Inner, Last).

**Example**: `(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15`

**Example**: `(x - 2)(x^2 + 3x - 1) = x^3 + 3x^2 - x - 2x^2 - 6x + 2 = x^3 + x^2 - 7x + 2`

### Special Products (worth memorizing)

| Pattern | Expansion |
|---|---|
| `(a + b)^2` | `a^2 + 2ab + b^2` |
| `(a - b)^2` | `a^2 - 2ab + b^2` |
| `(a + b)(a - b)` | `a^2 - b^2` |

## 3. Factoring Polynomials

Always pull out the **GCF (greatest common factor)** first, before trying any other method.

### GCF

**Example**: `6x^3 - 9x^2 = 3x^2(2x - 3)`

### Difference of Squares

`a^2 - b^2 = (a + b)(a - b)` — there is no "sum of squares" factoring for real numbers.

**Example**: `x^2 - 16 = (x + 4)(x - 4)`

### Sum and Difference of Cubes

```
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
a^3 - b^3 = (a - b)(a^2 + ab + b^2)
```

Mnemonic for the signs: **SOAP** — Same (as original), Opposite, Always Positive.

**Example**: `x^3 - 8 = (x - 2)(x^2 + 2x + 4)`

**Example**: `x^3 + 27 = (x + 3)(x^2 - 3x + 9)`

### Trinomial Factoring, `a = 1`

Find two numbers that **multiply to `c`** and **add to `b`** for `x^2 + bx + c`.

**Example**: `x^2 + 7x + 12` → need two numbers multiplying to 12, adding to 7: `3, 4` →
`(x + 3)(x + 4)`

### Trinomial Factoring, `a ≠ 1` (the "ac method")

For `ax^2 + bx + c`: find two numbers multiplying to `a·c` and adding to `b`, use them to
split the middle term, then factor by grouping.

**Example**: `2x^2 + 7x + 3` → `ac = 6`; need two numbers multiplying to 6, adding to 7:
`6, 1`. Rewrite: `2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)`

### Factoring by Grouping (4 terms)

Group the first two and last two terms, factor out each group's GCF, then factor out the
common binomial.

**Example**: `x^3 + 3x^2 + 2x + 6 = x^2(x + 3) + 2(x + 3) = (x + 3)(x^2 + 2)`

## 4. Dividing Polynomials

### Long Division

Works like numeric long division: divide, multiply, subtract, bring down, repeat.

**Example**: Divide `2x^3 - 3x^2 - 8x + 3` by `x - 3`.

```
          2x^2 + 3x + 1
        ___________________
x - 3 ) 2x^3 - 3x^2 - 8x + 3
      - (2x^3 - 6x^2)
        ______________
              3x^2 - 8x
            - (3x^2 - 9x)
              __________
                    x + 3
                  - (x - 3)
                    ______
                         6
```

Result: `2x^2 + 3x + 1`, remainder `6`.

### Synthetic Division

A shortcut for dividing by a **linear** factor `x - c`. Write only the coefficients, bring
down the first one, then repeatedly multiply by `c` and add.

**Example**: Same division as above, `2x^3 - 3x^2 - 8x + 3 ÷ (x - 3)`, so `c = 3`:

```
3 |  2   -3   -8    3
  |       6    9    3
  |________________
     2    3    1    6
```

Quotient: `2x^2 + 3x + 1`, remainder `6` — matches the long division above.

## 5. Remainder Theorem and Factor Theorem

**Remainder Theorem**: if a polynomial `P(x)` is divided by `(x - c)`, the remainder equals
`P(c)`.

**Check the example above**: `P(x) = 2x^3 - 3x^2 - 8x + 3`, `P(3) = 2(27) - 3(9) - 8(3) + 3
= 54 - 27 - 24 + 3 = 6` — matches the remainder found by division.

**Factor Theorem**: `(x - c)` is a factor of `P(x)` **if and only if** `P(c) = 0`.

**Example**: Is `(x - 1)` a factor of `P(x) = x^3 - 4x^2 + x + 6`?
`P(1) = 1 - 4 + 1 + 6 = 4 ≠ 0` → not a factor.
Is `(x - 3)` a factor? `P(3) = 27 - 36 + 3 + 6 = 0` → yes, `(x - 3)` is a factor.

## 6. Rational Root Theorem

For a polynomial with **integer coefficients**, every rational root, written in lowest
terms as `p/q`, must have `p` as a factor of the constant term and `q` as a factor of the
leading coefficient:

```
possible rational roots = ± (factors of constant term) / (factors of leading coefficient)
```

**Example**: `2x^3 - 3x^2 - 11x + 6 = 0`. Constant `6`: factors `±1, 2, 3, 6`. Leading
coefficient `2`: factors `±1, 2`. Possible rational roots: `±1, ±2, ±3, ±6, ±1/2, ±3/2`.

Testing `x = 3`: `2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0` → `x = 3` is a root.

This theorem only narrows down *candidates* — each one still has to be checked (usually
with synthetic division).

## 7. Finding All Zeros of a Polynomial

Combine the Rational Root Theorem, synthetic division, and factoring: find one rational
root, divide it out, and repeat on the smaller quotient until it factors completely.

**Example**: Continue with `2x^3 - 3x^2 - 11x + 6`, knowing `x = 3` is a root. Divide by
`(x - 3)` with synthetic division:

```
3 |  2   -3   -11    6
  |       6     9    6
  |________________
     2    3    -2    0
```

Quotient: `2x^2 + 3x - 2`, remainder `0`. Factor the quotient: `ac = -4`, numbers `4, -1` →
`2x^2 + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2)`.

So `2x^3 - 3x^2 - 11x + 6 = (x - 3)(2x - 1)(x + 2)`, and the zeros are `x = 3, x = 1/2,
x = -2`.

## 8. Graphing Polynomial Functions

### End Behavior

Determined by the polynomial's **degree** (even/odd) and the sign of its **leading
coefficient**:

| Degree | Leading coefficient | Left end (`x → -∞`) | Right end (`x → +∞`) |
|---|---|---|---|
| Even | Positive | up | up |
| Even | Negative | down | down |
| Odd | Positive | down | up |
| Odd | Negative | up | down |

### Multiplicity of Roots

If `(x - c)^k` is a factor of `P(x)`, then `c` is a root with **multiplicity `k`**:

- **Odd multiplicity** (1, 3, 5, ...): the graph **crosses** the x-axis at `c`. Multiplicity
  1 crosses like a line; multiplicity 3+ crosses but flattens out near the axis.
- **Even multiplicity** (2, 4, ...): the graph **touches** the x-axis at `c` and turns back
  (bounces off) — it does not cross.

### Turning Points

A degree-`n` polynomial has **at most `n - 1` turning points** (local maxima/minima).

**Example**: `f(x) = (x - 1)^2(x + 3)` is degree 3, leading coefficient `1` (positive, odd
degree) → falls on the left, rises on the right. Roots: `x = 1` (multiplicity 2 → touches),
`x = -3` (multiplicity 1 → crosses). At most `3 - 1 = 2` turning points.

## 9. Fundamental Theorem of Algebra

A degree-`n` polynomial (`n ≥ 1`) has **exactly `n` roots**, counting multiplicity, over the
complex numbers. Some roots may be non-real (complex); if the polynomial's coefficients are
all real, complex roots always come in **conjugate pairs** (`a + bi` and `a - bi`).

## 10. Quick Reference

| Concept | Key idea |
|---|---|
| Degree | highest exponent present; names the polynomial (linear, quadratic, cubic, ...) |
| Standard form | terms written in descending order of degree |
| Difference of squares | `a^2 - b^2 = (a + b)(a - b)` |
| Sum/difference of cubes | `a^3 ± b^3 = (a ± b)(a^2 ∓ ab + b^2)` |
| Remainder Theorem | `P(c)` = remainder of `P(x) ÷ (x - c)` |
| Factor Theorem | `(x - c)` is a factor ⟺ `P(c) = 0` |
| Rational Root Theorem | possible roots = `±(factors of constant)/(factors of leading coeff)` |
| End behavior | set by degree parity + sign of leading coefficient |
| Multiplicity | odd → crosses x-axis; even → touches (bounces off) x-axis |
| Turning points | at most `n - 1` for a degree-`n` polynomial |
| Fundamental Theorem of Algebra | degree `n` → exactly `n` roots (complex, counting multiplicity) |

## 11. Practice Problems

1. Classify `4x^3 - 2x + 7` by degree and by number of terms.
2. Add: `(5x^2 - 3x + 2) + (-2x^2 + 4x - 6)`
3. Multiply: `(2x - 3)(x + 5)`
4. Factor completely: `3x^3 - 27x`
5. Factor: `x^3 - 64`
6. Factor: `2x^2 + x - 15`
7. Use synthetic division to divide `x^3 - 2x^2 - 5x + 6` by `(x - 3)`. State the remainder
   and whether `(x - 3)` is a factor.
8. Find all zeros of `f(x) = x^3 - 4x^2 - 7x + 10`, and describe its end behavior.

<details>
<summary>Answers</summary>

1. Degree 3 (cubic), 3 terms (trinomial)
2. `3x^2 + x - 4`
3. `2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15`
4. `3x^3 - 27x = 3x(x^2 - 9) = 3x(x - 3)(x + 3)`
5. `x^3 - 64 = (x - 4)(x^2 + 4x + 16)`
6. `2x^2 + x - 15`: `ac = -30`, numbers `6, -5` → `2x^2 + 6x - 5x - 15 = 2x(x+3) - 5(x+3) =
   (2x - 5)(x + 3)`
7. Synthetic division with `c = 3` on `1, -2, -5, 6`: bring down `1`; `1·3=3, -2+3=1`;
   `1·3=3, -5+3=-2`; `-2·3=-6, 6-6=0`. Quotient `x^2 + x - 2`, remainder `0` → `(x - 3)` **is**
   a factor. (Quotient factors further: `(x + 2)(x - 1)`.)
8. Rational root candidates: `±1, 2, 5, 10`. Test `x = 1`: `1 - 4 - 7 + 10 = 0` → root.
   Synthetic division by `(x - 1)` on `1, -4, -7, 10` gives quotient `x^2 - 3x - 10 =
   (x - 5)(x + 2)`. Zeros: `x = 1, 5, -2`. Degree 3 (odd), leading coefficient positive →
   falls left, rises right.

</details>

## 12. Most Frequently Missed on SAT/ACT

Polynomial questions on the ACT cluster into three types — factoring/FOILing, graphing
polynomial functions, and polynomial operations — with factoring the most common and
usually medium difficulty. Most missed points come from a handful of repeat traps:

- **Skipping the GCF first.** Jumping straight to trinomial or difference-of-squares
  patterns before pulling out a common factor. `2x^2 + 8x` is not "unfactorable" — factor
  out `2x` first to get `2x(x + 4)`.
- **Factor-pair slip-ups.** For `x^2 + bx + c`, the two numbers must satisfy *both*
  conditions (multiply to `c` **and** add to `b`), not just one. Under time pressure it's
  easy to grab a pair that only satisfies one and move on.
- **Stopping one layer too early.** `x^3 + 4x^2 + 3x` factors first to `x(x^2 + 4x + 3)`,
  but the trinomial factors further to `x(x + 1)(x + 3)`. After any factoring step, ask
  "can this piece factor more?"
- **Sign errors.** Losing track of a negative sign while factoring or FOILing is probably
  the single biggest source of wrong answers here — test-writers often build a wrong
  answer choice that's exactly what you'd get from the sign slip.
- **Not using every given root/point.** Given roots `-5` and `1`, it's tempting to write
  `P(x) = (x + 5)(x - 1)` and stop — but a leading coefficient `a` (or an extra root) may
  be needed to match another given point on the graph.
- Long/synthetic division isn't reliably tested directly (accounts vary), but the
  **Remainder Theorem** — evaluating `P(c)` to get the remainder of `P(x) ÷ (x - c)` —
  does show up, so treat synthetic division itself as an Algebra II skill more than a
  guaranteed test topic.

### Practice

1. Factor completely: `3x^3 + 12x^2 + 9x`
2. A polynomial has zeros at `x = -2` and `x = 3`, and the graph passes through
   `(0, -12)`. Find `P(x)`.

<details>
<summary>Answers</summary>

1. GCF first: `3x(x^2 + 4x + 3)`, then factor the trinomial: `3x(x + 1)(x + 3)`. Stopping
   at `3x(x^2 + 4x + 3)` is the "didn't factor completely" trap.
2. `P(x) = a(x + 2)(x - 3)`. Using `(0, -12)`: `a(2)(-3) = -12 → -6a = -12 → a = 2`. So
   `P(x) = 2(x + 2)(x - 3) = 2x^2 - 2x - 12`. Writing `P(x) = (x + 2)(x - 3)` and stopping
   is the "forgot the leading coefficient" trap — it gives `(0, -6)`, not `(0, -12)`.

</details>
