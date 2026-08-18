# Functions — Algebra II Study Notes (Unit 1, part 2: "Sequence and Functions")

Companion to [sequences-and-series.md](sequences-and-series.md) — together these cover
Unit 1 of the course per [course-info.md](course-info.md).

## 1. What Is a Function?

A **relation** is any set of ordered pairs `(x, y)`. A **function** is a relation where
every input (`x`) maps to **exactly one** output (`y`).

- **Domain**: the set of all valid inputs (`x`-values).
- **Range**: the set of all resulting outputs (`y`-values).
- **Vertical Line Test**: if a vertical line crosses a graph more than once, it's *not*
  a function (some `x` maps to more than one `y`).

### Function Notation

`f(x)` is read "f of x" — it's the output of function `f` when the input is `x`.
`f(x) = 2x + 3` means: take `x`, double it, add 3.

- `f(5) = 2(5) + 3 = 13` — evaluate by substituting.
- Different letters (`g(x)`, `h(x)`) name different functions.

## 2. Finding Domain and Range

Watch for values that break the function:

| Expression type | Domain restriction |
|---|---|
| Polynomial (`x^2`, `3x+1`) | none — all real numbers |
| Fraction `1/(x-a)` | `x ≠ a` (denominator can't be 0) |
| Square root `√(x-a)` | `x ≥ a` (can't take √ of a negative) |
| Rational + root combined | apply both restrictions |

**Example**: `f(x) = √(x - 4)` → need `x - 4 ≥ 0` → domain: `x ≥ 4`.

**Example**: `f(x) = 1/(x + 2)` → need `x + 2 ≠ 0` → domain: all reals except `x = -2`.

Range is often found by looking at the graph's shape, or by solving the equation for `x`
in terms of `y` and finding *that* expression's domain.

## 3. Piecewise Functions

A function defined by different rules on different parts of the domain:

```
         { x + 1,   x < 0
f(x)  =  { x^2,     0 ≤ x < 3
         { 7,       x ≥ 3
```

To evaluate, check which condition `x` satisfies, then use that piece's rule.
`f(-2) = -2 + 1 = -1` (uses first piece, since `-2 < 0`).
`f(2) = 2^2 = 4` (uses second piece, since `0 ≤ 2 < 3`).

## 4. Operations on Functions

Given `f(x)` and `g(x)`:

- `(f + g)(x) = f(x) + g(x)`
- `(f - g)(x) = f(x) - g(x)`
- `(f · g)(x) = f(x) · g(x)`
- `(f / g)(x) = f(x) / g(x)`, domain excludes wherever `g(x) = 0`

**Example**: `f(x) = x^2, g(x) = x + 1` → `(f + g)(x) = x^2 + x + 1`; `(f/g)(x) = x^2/(x+1)`, `x ≠ -1`.

### Composition of Functions

`(f ∘ g)(x) = f(g(x))` — plug `g(x)` in for every `x` in `f`.

**Example**: `f(x) = 2x + 1`, `g(x) = x^2` →
`f(g(x)) = 2(x^2) + 1 = 2x^2 + 1`
`g(f(x)) = (2x + 1)^2` — note composition is generally **not** commutative:
`f(g(x)) ≠ g(f(x))` in general.

## 5. Inverse Functions

The inverse `f^(-1)(x)` "undoes" `f(x)`: if `f(a) = b`, then `f^(-1)(b) = a`.

**To find an inverse algebraically:**
1. Replace `f(x)` with `y`.
2. Swap `x` and `y`.
3. Solve for `y`.
4. Replace `y` with `f^(-1)(x)`.

**Example**: `f(x) = 3x - 4`
1. `y = 3x - 4`
2. `x = 3y - 4`
3. `x + 4 = 3y` → `y = (x + 4)/3`
4. `f^(-1)(x) = (x + 4)/3`

**Check**: `f(f^(-1)(x))` and `f^(-1)(f(x))` should both simplify to `x`.

A function has an inverse that is *also* a function only if the original passes the
**Horizontal Line Test** (i.e., the original function is one-to-one).

## 6. Even and Odd Functions

- **Even**: `f(-x) = f(x)` for all `x` (graph symmetric about the y-axis). E.g. `f(x) = x^2`.
- **Odd**: `f(-x) = -f(x)` for all `x` (graph symmetric about the origin). E.g. `f(x) = x^3`.
- Some functions are neither.

## 7. Quick Reference

| Concept | Key idea |
|---|---|
| Function | each input → exactly one output |
| Domain | valid `x`-values (watch: denominators ≠ 0, radicands ≥ 0) |
| Composition `f(g(x))` | apply `g` first, then `f` |
| Inverse `f^(-1)(x)` | swap `x`/`y`, solve for `y` |
| One-to-one | passes horizontal line test → has a function inverse |

## 8. Practice Problems

1. Find the domain of `f(x) = √(2x - 6)`.
2. Find the domain of `g(x) = 5/(x^2 - 9)`.
3. Given `f(x) = x - 2` and `g(x) = x^2`, find `(f ∘ g)(x)` and `(g ∘ f)(x)`.
4. Find `f^(-1)(x)` for `f(x) = (x - 5)/2`.
5. Is `f(x) = x^4 - 3x^2` even, odd, or neither?
6. For the piecewise function in Section 3, find `f(0)` and `f(5)`.

<details>
<summary>Answers</summary>

1. `2x - 6 ≥ 0` → `x ≥ 3`
2. `x^2 - 9 ≠ 0` → `x ≠ 3, x ≠ -3`
3. `(f∘g)(x) = g(x) - 2 = x^2 - 2`; `(g∘f)(x) = (x-2)^2 = x^2 - 4x + 4`
4. `y = (x-5)/2` → swap: `x = (y-5)/2` → `2x = y - 5` → `y = 2x + 5` → `f^(-1)(x) = 2x + 5`
5. `f(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = f(x)` → **even**
6. `f(0) = 0^2 = 0` (second piece, since `0 ≤ 0 < 3`); `f(5) = 7` (third piece, since `5 ≥ 3`)

</details>

## 9. Most Frequently Missed on SAT/ACT

Function questions are everywhere on both tests — PrepScholar counts at least six
function-equation questions on a typical SAT alone, plus function-graph and
function-table variants, and the ACT works them into Algebra questions throughout.
The points that get missed usually aren't new math — they're one of these traps.

1. **Misreading function notation.** `f(x + 2)` is *not* `f(x) + 2` — it means
   substitute `(x + 2)` for every `x` in f's rule. Same family of mistake: `-f(x)`
   (negate the *output*) gets confused with `f(-x)` (negate the *input*). They're
   different functions.
2. **Composing in the wrong order.** For `(f ∘ g)(x) = f(g(x))`, reading left to
   right tempts you to apply `f` first — but composition works inside-out: evaluate
   `g(x)`, then feed that result into `f`. Also, `∘` means composition, not
   multiplication — `(f ∘ g)(x) ≠ f(x) · g(x)`.
3. **FOIL errors leaking into function algebra.** `(x + 3)^2` is not `x^2 + 9` — the
   middle term gets dropped. Correct: `(x + 3)^2 = x^2 + 6x + 9`.
4. **Domain blind spot in composite functions.** The domain of `f(g(x))` isn't just
   the domain of `g` — every *output* of `g` also has to fall inside `f`'s domain.
   Example: `g(x) = x^2` (fine for all `x`) and `f(x) = ln(x)` → `f(g(x))` still
   fails at `x = 0`, since `ln(0)` is undefined.
5. **Answering a different question than the one asked.** Solving correctly for `x`
   when the question wants `6x`, or missing a "NOT"/"EXCEPT" buried in the wording,
   makes a fully correct calculation land on the wrong bubble. Re-read the question
   stem after you solve, not just before.

**Practice**

1. If `f(x) = x^2 - 4x`, what is `f(x + 2)`?
2. If `f(x) = √x` and `g(x) = x - 9`, what is the domain of `(f ∘ g)(x)`?

<details>
<summary>Answers</summary>

1. `f(x+2) = (x+2)^2 - 4(x+2) = x^2 + 4x + 4 - 4x - 8 = x^2 - 4`. A wrong-answer
   choice of `x^2 - 4x + 2` would come from the trap `f(x) + 2` (mistake #1).
2. `f(g(x)) = √(x - 9)`, needs `x - 9 ≥ 0` → domain: `x ≥ 9`. A wrong-answer choice
   of "all real numbers" would come from only checking `g`'s domain and skipping the
   restriction `f` imposes on `g(x)` (mistake #4).

</details>
