# Transformations of Functions — Algebra II Study Notes (Unit 5)

> Per the course syllabus ([course-info.md](course-info.md)), "Transformations of Function" is
> Unit 5 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology materials page
> itself couldn't be reached from this environment (NMUSD login required, domain blocked by
> network egress rules), so the syllabus's specific reading/assignment list for this unit
> isn't reflected here — these notes cover the standard curriculum for the topic. Paste in
> specifics from Schoology (subtopic order, vocab list, assigned problems) to refine further.

## 1. Parent Functions

A **parent function** is the simplest form of a family of functions — the "un-transformed"
version everything else in that family is built from.

| Name | Equation | Domain | Range |
|---|---|---|---|
| Linear | `f(x) = x` | all reals | all reals |
| Quadratic | `f(x) = x^2` | all reals | `y ≥ 0` |
| Cubic | `f(x) = x^3` | all reals | all reals |
| Absolute value | `f(x) = \|x\|` | all reals | `y ≥ 0` |
| Square root | `f(x) = √x` | `x ≥ 0` | `y ≥ 0` |
| Rational | `f(x) = 1/x` | `x ≠ 0` | `y ≠ 0` |
| Exponential | `f(x) = b^x` (`b > 0, b ≠ 1`) | all reals | `y > 0` |

Every transformation in this unit takes one of these shapes and shifts, stretches, or
reflects it — the underlying pattern of the graph never changes, only its size, position, or
orientation.

## 2. Vertical Shifts — `f(x) + k`

Adding a constant `k` **outside** the function moves the whole graph **up or down**.

- `k > 0` → shifts **up** `k` units
- `k < 0` → shifts **down** `|k|` units

**Example**: `g(x) = x^2 + 3` is the quadratic parent function shifted **up 3**. The vertex
moves from `(0, 0)` to `(0, 3)`.

**Example**: `g(x) = √x - 2` is the square root parent function shifted **down 2**.

## 3. Horizontal Shifts — `f(x - h)`

Adding/subtracting a constant **inside** the function, next to `x`, moves the graph **left or
right** — and the sign works the opposite way you'd expect:

- `f(x - h)`, `h > 0` → shifts **right** `h` units
- `f(x + h)` (i.e. `h < 0`) → shifts **left** `h` units

**Why it's counterintuitive**: to get the *same* output as the parent function, `x` now has
to be `h` *larger* (to cancel out the `-h`), so every point moves to the right.

**Example**: `g(x) = (x - 4)^2` is `f(x) = x^2` shifted **right 4**. (Not left — check the
vertex: it's at `x = 4`, since that's what makes the inside equal 0.)

**Example**: `g(x) = |x + 2|` is `f(x) = |x|` shifted **left 2**, since `x + 2 = x - (-2)`
means `h = -2`.

## 4. Vertical Stretch/Compression — `a · f(x)`

Multiplying the **outside** of the function by `a` (`a > 0`) scales the graph vertically —
every `y`-value gets multiplied by `a`.

- `|a| > 1` → vertical **stretch** (taller/steeper)
- `0 < |a| < 1` → vertical **compression** (shorter/flatter)

**Example**: `g(x) = 3x^2` is `f(x) = x^2` stretched vertically by a factor of 3 — points get
3 times as far from the x-axis.

**Example**: `g(x) = (1/2)|x|` is `f(x) = |x|` compressed vertically by a factor of 1/2.

## 5. Horizontal Stretch/Compression — `f(bx)`

Multiplying **inside** the function, next to `x`, by `b` (`b > 0`) scales the graph
horizontally — and like the shift, it works opposite to intuition:

- `|b| > 1` → horizontal **compression** (squeezed toward the y-axis) by a factor of `1/b`
- `0 < |b| < 1` → horizontal **stretch** (spread away from the y-axis) by a factor of `1/b`

**Example**: `g(x) = (2x)^2` is `f(x) = x^2` compressed horizontally by a factor of `1/2` —
points reach the same `y`-value at half the `x`-distance from the axis.

**Example**: `g(x) = √(x/3)` is `f(x) = √x` stretched horizontally by a factor of 3 (here
`b = 1/3`).

## 6. Reflections

| Transformation | Effect |
|---|---|
| `-f(x)` | reflects over the **x-axis** (flips `y`-values) |
| `f(-x)` | reflects over the **y-axis** (flips `x`-values) |

**Example**: `g(x) = -x^2` is `f(x) = x^2` reflected over the x-axis — it opens **downward**
instead of upward.

**Example**: `g(x) = √(-x)` is `f(x) = √x` reflected over the y-axis — its domain becomes
`x ≤ 0` instead of `x ≥ 0`.

A negative `a` in `a·f(x)` combines a vertical stretch/compression *with* an x-axis
reflection; a negative `b` in `f(bx)` combines a horizontal stretch/compression *with* a
y-axis reflection.

## 7. Combining Transformations

The **general transformation form** is:

```
g(x) = a · f(b(x - h)) + k
```

where, relative to the parent function `f(x)`:

| Parameter | Controls | Notes |
|---|---|---|
| `a` | vertical stretch/compression, x-axis reflection | reflect over x-axis if `a < 0` |
| `b` | horizontal stretch/compression, y-axis reflection | reflect over y-axis if `b < 0`; stretch/compress by `1/b` |
| `h` | horizontal shift | right if `h > 0`, left if `h < 0` (watch the `x - h` sign) |
| `k` | vertical shift | up if `k > 0`, down if `k < 0` |

### Order of Operations

Because of how function notation nests, transformations must be applied to a point in this
order (this mirrors order of operations, working from the inside out on `x`, then outside
on the result):

1. **Horizontal stretch/compression and reflection** (`b`)
2. **Horizontal shift** (`h`)
3. **Vertical stretch/compression and reflection** (`a`)
4. **Vertical shift** (`k`)

**Example**: Describe `g(x) = -2(x + 1)^2 + 5` as a transformation of `f(x) = x^2`.
Rewrite in general form: `a = -2, b = 1, h = -1, k = 5`.
- Reflect over the x-axis, vertical stretch by 2 (from `a = -2`)
- Shift left 1 (from `h = -1`)
- Shift up 5 (from `k = 5`)

**Example**: Write the equation for `f(x) = \|x\|` reflected over the y-axis, compressed
horizontally by a factor of 1/3, and shifted right 2, down 4.

- Horizontal compression by 1/3 → `b = 3`
- Reflect over y-axis → `b` becomes negative → `b = -3`
- Shift right 2 → `h = 2`, so the inside is `-3(x - 2)`
- Shift down 4 → `k = -4`

`g(x) = |-3(x - 2)| - 4`

## 8. Identifying Transformations

**From an equation**: match it to the general form `a · f(b(x - h)) + k` and read off each
parameter directly.

**Example**: `g(x) = (1/4)√(x - 6) + 1` → parent `f(x) = √x`, with `a = 1/4` (vertical
compression), `h = 6` (right 6), `k = 1` (up 1).

**From a graph**: locate the key point that moved (vertex for quadratic/absolute value,
starting point for square root, the "corner" for `1/x`), compare its new location to the
parent's key point `(0, 0)` to read `h` and `k`, then check how far a second point (like
`(1, f(1))`) landed to figure out `a` and `b`.

**Example**: A parabola's vertex is at `(-3, 2)`, and it passes through `(-2, 4)` (one unit
right of the vertex, up 2 from it). The parent `f(x) = x^2` at `x = 1` gives `y = 1`, but
here the graph is up `2` instead of `1` at that same horizontal distance — so `a = 2`.
Equation: `g(x) = 2(x + 3)^2 + 2`.

## 9. Effect on Domain and Range

| Transformation | Domain affected? | Range affected? |
|---|---|---|
| Vertical shift `+ k` | no | yes — shifts by `k` |
| Horizontal shift `(x - h)` | yes — shifts by `h` | no |
| Vertical stretch/compression `a ·` | no | yes — scales by `\|a\|` (and flips if `a < 0`) |
| Horizontal stretch/compression `(bx)` | yes — scales by `1/\|b\|` (and flips if `b < 0`) | no |

The rule of thumb: **vertical** transformations (`a`, `k` — outside the function) only ever
affect the **range**; **horizontal** transformations (`b`, `h` — inside the function) only
ever affect the **domain**. Reflections can also flip which end of an inequality is open —
e.g. reflecting `f(x) = √x` (domain `x ≥ 0`) over the y-axis gives domain `x ≤ 0`.

**Example**: `f(x) = √x` has domain `x ≥ 0`, range `y ≥ 0`. For `g(x) = √(x - 5) + 2`
(shift right 5, up 2): domain becomes `x ≥ 5`, range becomes `y ≥ 2`.

**Example**: `f(x) = 1/x` has domain `x ≠ 0`, range `y ≠ 0`. For `g(x) = 1/(x + 1) - 3`
(shift left 1, down 3): domain becomes `x ≠ -1`, range becomes `y ≠ -3`.

## 10. Quick Reference

| Form | Transformation | Direction |
|---|---|---|
| `f(x) + k` | vertical shift | up if `k > 0`, down if `k < 0` |
| `f(x - h)` | horizontal shift | right if `h > 0`, left if `h < 0` |
| `a · f(x)`, `\|a\| > 1` | vertical stretch | taller |
| `a · f(x)`, `0 < \|a\| < 1` | vertical compression | shorter |
| `f(bx)`, `\|b\| > 1` | horizontal compression | squeezed (factor `1/b`) |
| `f(bx)`, `0 < \|b\| < 1` | horizontal stretch | spread out (factor `1/b`) |
| `-f(x)` | reflection over x-axis | flips vertically |
| `f(-x)` | reflection over y-axis | flips horizontally |
| General form | `a · f(b(x - h)) + k` | apply `b`, then `h`, then `a`, then `k` |
| Vertical changes (`a`, `k`) | affect range only | — |
| Horizontal changes (`b`, `h`) | affect domain only | — |

## 11. Practice Problems

1. Describe the transformation(s) applied to `f(x) = x^2` to get `g(x) = (x + 5)^2 - 1`.
2. Describe the transformation(s) applied to `f(x) = \|x\|` to get `g(x) = -3\|x\|`.
3. Write the equation for `f(x) = √x` shifted left 2 and stretched vertically by a factor
   of 4.
4. Write the equation for `f(x) = x^3` reflected over the y-axis and shifted down 6.
5. A quadratic's vertex is at `(2, -4)`, and it passes through `(3, -2)`. Write its equation
   in the form `a(x - h)^2 + k`.
6. Find the domain and range of `g(x) = -√(x - 1) + 3`, given the parent `f(x) = √x` has
   domain `x ≥ 0`, range `y ≥ 0`.
7. Find the domain and range of `g(x) = 1/(x + 4) + 2`, given the parent `f(x) = 1/x` has
   domain `x ≠ 0`, range `y ≠ 0`.
8. Given `g(x) = 2(3(x - 1))^2 + 5`, identify `a`, `b`, `h`, `k` relative to `f(x) = x^2`,
   and list the transformations in the correct order.

<details>
<summary>Answers</summary>

1. Shift left 5 (`h = -5`), shift down 1 (`k = -1`). Vertex moves from `(0,0)` to `(-5,-1)`.
2. Reflect over the x-axis and vertical stretch by a factor of 3 (from `a = -3`).
3. `g(x) = 4√(x + 2)`
4. `g(x) = -x^3 - 6` (reflecting `x^3` over the y-axis gives `-x^3`, since `x^3` is odd)
5. From vertex: `h = 2, k = -4`, so `g(x) = a(x-2)^2 - 4`. Plug in `(3,-2)`:
   `-2 = a(1)^2 - 4` → `-2 = a - 4` → `a = 2`. Equation: `g(x) = 2(x - 2)^2 - 4`
6. Horizontal shift right 1 → domain `x ≥ 1`. Reflection over x-axis + vertical shift up 3 →
   range `y ≤ 3`.
7. Horizontal shift left 4 → domain `x ≠ -4`. Vertical shift up 2 → range `y ≠ 2`.
8. `a = 2, b = 3, h = 1, k = 5`. Order: horizontal compression by 1/3 (`b`), then shift
   right 1 (`h`), then vertical stretch by 2 (`a`), then shift up 5 (`k`).

</details>
