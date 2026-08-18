# Complex Numbers and Rational Exponents — Algebra II Study Notes (Unit 3)

> Per the course syllabus ([course-info.md](course-info.md)), "Complex Numbers and Rational
> Exponents" is Unit 3 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology
> materials page itself couldn't be reached from this environment (NMUSD login required,
> domain blocked by network egress rules), so the syllabus's specific reading/assignment
> list for this unit isn't reflected here — these notes cover the standard curriculum for
> the topic. Paste in specifics from Schoology (subtopic order, vocab list, assigned
> problems) to refine further.

## 1. The Imaginary Unit `i`

Real numbers alone can't solve an equation like `x^2 = -1` — no real number squares to a
negative. Mathematicians define a new number to fill that gap:

```
i = √(-1)          so that          i^2 = -1
```

### Powers of `i` (cyclical pattern)

Higher powers of `i` cycle through just four values, repeating every 4 exponents:

| Power | Value |
|---|---|
| `i^1` | `i` |
| `i^2` | `-1` |
| `i^3` | `-i` |
| `i^4` | `1` |
| `i^5` | `i` (cycle repeats) |

To simplify `i^n` for a large `n`, divide `n` by 4 and use the remainder (remainder 0 means
`i^4`, i.e. `1`):

**Example**: `i^27` → `27 ÷ 4 = 6` remainder `3` → `i^27 = i^3 = -i`.

**Example**: `i^40` → `40 ÷ 4 = 10` remainder `0` → `i^40 = i^4 = 1`.

## 2. Complex Numbers: Standard Form

A **complex number** is written in standard form `a + bi`, where:

- `a` is the **real part**
- `b` is the **imaginary part** (note: `b` itself is a real number — it's the coefficient of `i`)

Every real number is also a complex number (with `b = 0`), and a number with `a = 0` (like
`5i`) is called **pure imaginary**.

**Example**: `-3 + 7i` has real part `-3`, imaginary part `7`.

## 3. Adding and Subtracting Complex Numbers

Combine like parts — real with real, imaginary with imaginary — the same way you'd combine
like terms in a polynomial.

**Example**: `(4 + 3i) + (2 - 5i) = (4 + 2) + (3 - 5)i = 6 - 2i`

**Example**: `(4 + 3i) - (2 - 5i) = 4 + 3i - 2 + 5i = 2 + 8i`

## 4. Multiplying Complex Numbers

Distribute (FOIL for two binomials) like normal, then simplify any `i^2` to `-1` and combine
like terms.

**Example**: `(2 + i)(3 - 4i) = 6 - 8i + 3i - 4i^2 = 6 - 5i - 4(-1) = 6 - 5i + 4 = 10 - 5i`

**Example**: `3i(2 - 5i) = 6i - 15i^2 = 6i - 15(-1) = 6i + 15 = 15 + 6i`

## 5. Complex Conjugates and Dividing Complex Numbers

The **complex conjugate** of `a + bi` is `a - bi` — same real part, opposite sign on the
imaginary part.

Multiplying a complex number by its conjugate always produces a **real number**:

```
(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2i^2 = a^2 + b^2
```

To **divide** complex numbers, multiply the numerator and denominator by the denominator's
conjugate (this clears `i` from the denominator, just like rationalizing a radical
denominator).

**Example**: `(3 + 2i) / (1 - i)`

Multiply top and bottom by the conjugate of `1 - i`, which is `1 + i`:

```
(3 + 2i)(1 + i)   3 + 3i + 2i + 2i^2   3 + 5i - 2   1 + 5i
--------------- = ------------------ = ----------- = ------ = 1/2 + 5/2 i
(1 - i)(1 + i)      1^2 + 1^2               2          2
```

## 6. Simplifying Square Roots of Negative Numbers

Rewrite `√(-n)` (for positive `n`) as `i√n`, then simplify the radical like normal:

```
√(-n) = √(n) * √(-1) = i√n
```

**Example**: `√(-16) = i√16 = 4i`

**Example**: `√(-20) = i√20 = i√(4·5) = 2i√5`

**Caution**: only pull `i` out *before* multiplying two negative radicals — `√(-4)·√(-9)`
is **not** `√36 = 6`. Rewrite each as `i√(...)` first: `√(-4)·√(-9) = 2i · 3i = 6i^2 = -6`.

## 7. Solving Quadratics with Complex Solutions

If the quadratic formula's discriminant `b^2 - 4ac` is **negative**, the equation has two
complex (non-real) solutions — a conjugate pair.

```
x = (-b ± √(b^2 - 4ac)) / 2a
```

| Discriminant `b^2 - 4ac` | Solutions |
|---|---|
| `> 0` | two distinct real solutions |
| `= 0` | one repeated real solution |
| `< 0` | two complex conjugate solutions |

**Example**: Solve `x^2 + 2x + 5 = 0`. Here `a = 1, b = 2, c = 5`:

```
x = (-2 ± √(4 - 20)) / 2 = (-2 ± √(-16)) / 2 = (-2 ± 4i) / 2 = -1 ± 2i
```

Solutions: `x = -1 + 2i` and `x = -1 - 2i` — a complex conjugate pair, as expected whenever
the original equation has real coefficients.

## 8. Rational Exponents

A **rational exponent** is a fractional exponent, and it means the same thing as a radical:

```
x^(1/n) = ⁿ√x          (the n-th root of x)
x^(m/n) = (ⁿ√x)^m  =  ⁿ√(x^m)
```

- The **denominator** `n` of the exponent is the **index** of the root.
- The **numerator** `m` is the power applied (before or after the root — both give the same
  result when `x ≥ 0`).

**Example**: `x^(1/2) = √x` (square root); `x^(1/3) = ³√x` (cube root).

**Example**: `8^(2/3) = (³√8)^2 = 2^2 = 4`. (Easier to root first, then raise to the power,
so the numbers stay small.)

## 9. Converting Between Radical Form and Rational Exponent Form

Same rule as above, applied in either direction:

| Radical form | Rational exponent form |
|---|---|
| `√x` | `x^(1/2)` |
| `⁵√x` | `x^(1/5)` |
| `⁴√(x^3)` | `x^(3/4)` |
| `1/√x` | `x^(-1/2)` |

**Example**: Write `⁵√(x^3)` using a rational exponent → `x^(3/5)`.

**Example**: Write `y^(4/3)` as a radical → `³√(y^4)` or, equivalently, `(³√y)^4`.

## 10. Simplifying Expressions with Rational Exponents

The regular exponent rules all still apply — the exponents just happen to be fractions, so
add/subtract/multiply fractions carefully (common denominators for the product rule).

| Rule | Formula |
|---|---|
| Product rule | `x^a * x^b = x^(a+b)` |
| Quotient rule | `x^a / x^b = x^(a-b)` |
| Power rule | `(x^a)^b = x^(ab)` |
| Negative exponent | `x^(-a) = 1/x^a` |

**Example (product rule)**: `x^(1/2) * x^(1/3) = x^(1/2 + 1/3) = x^(3/6 + 2/6) = x^(5/6)`

**Example (power rule)**: `(x^(2/3))^(3/4) = x^(2/3 * 3/4) = x^(6/12) = x^(1/2) = √x`

**Example (quotient rule)**: `x^(5/4) / x^(1/4) = x^(5/4 - 1/4) = x^(4/4) = x^1 = x`

**Example (combined)**: `(16x^4)^(1/2) = 16^(1/2) * x^(4 * 1/2) = 4x^2`

## 11. Solving Equations with Rational Exponents

To undo a rational exponent `m/n`, raise both sides to the **reciprocal power** `n/m`.
Always check solutions in the original equation — raising both sides to a power can
introduce extraneous solutions (especially with even roots).

**Example**: Solve `x^(2/3) = 9`.

Raise both sides to the `3/2` power:

```
(x^(2/3))^(3/2) = 9^(3/2)
x = (√9)^3 = 3^3 = 27
```

Check: `27^(2/3) = (³√27)^2 = 3^2 = 9` ✓

**Example**: Solve `2x^(1/2) - 3 = 5`.

```
2x^(1/2) = 8
x^(1/2) = 4
x = 4^2 = 16
```

Check: `2(16)^(1/2) - 3 = 2(4) - 3 = 5` ✓

## 12. Quick Reference

| Concept | Key idea |
|---|---|
| `i` | `√(-1)`, so `i^2 = -1` |
| Powers of `i` | cycle every 4: `i, -1, -i, 1, ...` |
| Standard form | `a + bi` (`a` = real part, `b` = imaginary part) |
| Add/subtract complex numbers | combine real parts and imaginary parts separately |
| Multiply complex numbers | FOIL, then simplify `i^2 = -1` |
| Complex conjugate of `a + bi` | `a - bi`; product `(a+bi)(a-bi) = a^2 + b^2` (real) |
| Divide complex numbers | multiply top and bottom by the denominator's conjugate |
| `√(-n)`, `n > 0` | `i√n` |
| Quadratic formula, `b^2-4ac < 0` | two complex conjugate solutions |
| `x^(1/n)` | `ⁿ√x` |
| `x^(m/n)` | `(ⁿ√x)^m = ⁿ√(x^m)` |
| Rational exponent rules | same product/quotient/power rules as integer exponents |
| Solving `x^(m/n) = k` | raise both sides to the reciprocal power `n/m`; check for extraneous solutions |

## 13. Practice Problems

1. Simplify `i^53`.
2. Simplify `√(-45)`.
3. Add: `(6 - 2i) + (-4 + 5i)`
4. Multiply: `(3 - i)(2 + 4i)`
5. Divide: `(5 + i) / (2 - 3i)`
6. Solve using the quadratic formula: `x^2 - 4x + 13 = 0`
7. Rewrite `⁴√(x^5)` as a rational exponent, then simplify `(x^(2/5))^(5/6)` using the power rule.
8. Solve for `x`: `x^(3/4) = 8`

<details>
<summary>Answers</summary>

1. `53 ÷ 4 = 13` remainder `1` → `i^53 = i^1 = i`
2. `√(-45) = i√45 = i√(9·5) = 3i√5`
3. `(6 - 4) + (-2 + 5)i = 2 + 3i`
4. `(3-i)(2+4i) = 6 + 12i - 2i - 4i^2 = 6 + 10i - 4(-1) = 6 + 10i + 4 = 10 + 10i`
5. Multiply by conjugate `2 + 3i`: `(5+i)(2+3i) / (2-3i)(2+3i) = (10 + 15i + 2i + 3i^2) / (4+9)
   = (10 + 17i - 3) / 13 = (7 + 17i)/13 = 7/13 + 17/13 i`
6. `a=1, b=-4, c=13` → `x = (4 ± √(16-52))/2 = (4 ± √(-36))/2 = (4 ± 6i)/2 = 2 ± 3i`
7. `⁴√(x^5) = x^(5/4)`; `(x^(2/5))^(5/6) = x^(2/5 * 5/6) = x^(10/30) = x^(1/3) = ³√x`
8. Raise both sides to `4/3`: `x = 8^(4/3) = (³√8)^4 = 2^4 = 16`. Check: `16^(3/4) =
   (⁴√16)^3 = 2^3 = 8` ✓

</details>
