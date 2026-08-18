# Trigonometric Functions — Algebra II Study Notes (Unit 6)

> Per the course syllabus ([course-info.md](course-info.md)), "Trigonometric Function" is
> Unit 6 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology materials page
> itself couldn't be reached from this environment (NMUSD login required, domain blocked by
> network egress rules), so the syllabus's specific reading/assignment list for this unit
> isn't reflected here — these notes cover the standard curriculum for the topic. Paste in
> specifics from Schoology (subtopic order, vocab list, assigned problems) to refine further.

## 1. Angles: Degrees and Radians

An angle in **standard position** has its vertex at the origin and its initial side along
the positive x-axis. Positive angles rotate counterclockwise; negative angles rotate
clockwise. The **terminal side** is where the rotation ends.

A **radian** measures angle by arc length: one radian is the angle for which the arc length
equals the radius. A full rotation is `360°` or `2π` radians, so:

```
360° = 2π radians  →  180° = π radians
```

### Converting Between Degrees and Radians

- Degrees → radians: multiply by `π/180`
- Radians → degrees: multiply by `180/π`

**Example**: Convert `150°` to radians: `150 * (π/180) = 5π/6`.

**Example**: Convert `7π/4` radians to degrees: `7π/4 * (180/π) = 7 * 45 = 315°`.

### Coterminal Angles

Angles that share the same terminal side differ by a multiple of `360°` (or `2π`).

**Example**: `-45°` is coterminal with `-45° + 360° = 315°`.

## 2. Right-Triangle Trigonometry (SOH-CAH-TOA)

For an acute angle `θ` in a right triangle, the trig ratios compare side lengths:

```
sin(θ) = opposite / hypotenuse     (SOH)
cos(θ) = adjacent / hypotenuse     (CAH)
tan(θ) = opposite / adjacent       (TOA)
```

**Example**: A right triangle has legs `3` and `4`, hypotenuse `5`, with `θ` opposite the
side of length `3`. `sin(θ) = 3/5`, `cos(θ) = 4/5`, `tan(θ) = 3/4`.

This is the bridge to the unit circle: placing that same right triangle inside a circle of
radius 1 (the hypotenuse becomes the radius) turns "opposite/hypotenuse" and
"adjacent/hypotenuse" directly into the `y`- and `x`-coordinates of a point on the circle.

## 3. The Unit Circle

The **unit circle** is the circle of radius 1 centered at the origin. For an angle `θ`
measured from the positive x-axis, the terminal side crosses the circle at a point
`(x, y)` where:

```
x = cos(θ)      y = sin(θ)
```

So every point on the unit circle is literally `(cos(θ), sin(θ))`.

### Key Angles (Quadrant I) and Their Multiples

Memorize the Quadrant I values — the rest of the circle is just sign changes on the same
numbers (see Section 5, reference angles):

| Degrees | Radians | `(cos θ, sin θ)` |
|---|---|---|
| 0° | `0` | `(1, 0)` |
| 30° | `π/6` | `(√3/2, 1/2)` |
| 45° | `π/4` | `(√2/2, √2/2)` |
| 60° | `π/3` | `(1/2, √3/2)` |
| 90° | `π/2` | `(0, 1)` |

### Full Circle (All Four Quadrants)

| Degrees | Radians | `(cos θ, sin θ)` |
|---|---|---|
| 0° | `0` | `(1, 0)` |
| 30° | `π/6` | `(√3/2, 1/2)` |
| 45° | `π/4` | `(√2/2, √2/2)` |
| 60° | `π/3` | `(1/2, √3/2)` |
| 90° | `π/2` | `(0, 1)` |
| 120° | `2π/3` | `(-1/2, √3/2)` |
| 135° | `3π/4` | `(-√2/2, √2/2)` |
| 150° | `5π/6` | `(-√3/2, 1/2)` |
| 180° | `π` | `(-1, 0)` |
| 210° | `7π/6` | `(-√3/2, -1/2)` |
| 225° | `5π/4` | `(-√2/2, -√2/2)` |
| 240° | `4π/3` | `(-1/2, -√3/2)` |
| 270° | `3π/2` | `(0, -1)` |
| 300° | `5π/3` | `(1/2, -√3/2)` |
| 315° | `7π/4` | `(√2/2, -√2/2)` |
| 330° | `11π/6` | `(√3/2, -1/2)` |
| 360° | `2π` | `(1, 0)` |

**Example**: `sin(240°)`. From the table, `(cos 240°, sin 240°) = (-1/2, -√3/2)`, so
`sin(240°) = -√3/2`.

## 4. The Six Trigonometric Functions

Beyond sine and cosine, four more functions are built from ratios of `x`, `y`, and `r`
(where `r = 1` on the unit circle, or the hypotenuse in a right triangle):

| Function | Definition (right triangle) | Definition (unit circle) | Reciprocal of |
|---|---|---|---|
| `sin(θ)` | opposite / hypotenuse | `y` | — |
| `cos(θ)` | adjacent / hypotenuse | `x` | — |
| `tan(θ)` | opposite / adjacent | `y / x` | — |
| `csc(θ)` | hypotenuse / opposite | `1 / y` | `1 / sin(θ)` |
| `sec(θ)` | hypotenuse / adjacent | `1 / x` | `1 / cos(θ)` |
| `cot(θ)` | adjacent / opposite | `x / y` | `1 / tan(θ)` |

Also useful: `tan(θ) = sin(θ) / cos(θ)` and `cot(θ) = cos(θ) / sin(θ)`.

**Example**: At `θ = 60°`, `(x, y) = (1/2, √3/2)`. So `tan(60°) = (√3/2)/(1/2) = √3`,
`sec(60°) = 1/(1/2) = 2`, `csc(60°) = 1/(√3/2) = 2/√3 = 2√3/3`.

`tan(θ)` and `sec(θ)` are undefined wherever `x = cos(θ) = 0` (i.e., `θ = 90°, 270°, ...`).
`cot(θ)` and `csc(θ)` are undefined wherever `y = sin(θ) = 0` (i.e., `θ = 0°, 180°, ...`).

## 5. Reference Angles and the ASTC Rule

A **reference angle** is the acute angle (always positive, between `0°` and `90°`) formed
between the terminal side of `θ` and the x-axis. It tells you *which* Quadrant I value to
use; the quadrant tells you the *sign*.

| Quadrant | Reference angle formula (degrees) | sin | cos | tan |
|---|---|---|---|---|
| I (0°–90°) | `θ` | + | + | + |
| II (90°–180°) | `180° - θ` | + | − | − |
| III (180°–270°) | `θ - 180°` | − | − | + |
| IV (270°–360°) | `360° - θ` | − | + | − |

Mnemonic **ASTC** ("All Students Take Calculus") — going counterclockwise from Quadrant I,
the functions that are positive in each quadrant are: **A**ll, **S**ine (and csc),
**T**angent (and cot), **C**osine (and sec).

**Example**: Find `cos(210°)`. Quadrant III (between 180° and 270°), reference angle
`210° - 180° = 30°`. `cos(30°) = √3/2`, and cosine is negative in Quadrant III, so
`cos(210°) = -√3/2` — matches the unit-circle table.

## 6. The Pythagorean Identity

Since every unit-circle point `(cos θ, sin θ)` satisfies `x^2 + y^2 = 1` (the equation of
the circle itself):

```
sin^2(x) + cos^2(x) = 1
```

This holds for **every** angle `x` and is the most important trig identity — it lets you
find one function's value from another, given the quadrant to fix the sign.

**Example**: If `sin(θ) = 3/5` and `θ` is in Quadrant II, find `cos(θ)`.
`cos^2(θ) = 1 - sin^2(θ) = 1 - 9/25 = 16/25` → `cos(θ) = ±4/5`. Quadrant II → cosine
negative → `cos(θ) = -4/5`.

Dividing the identity by `cos^2(x)` or `sin^2(x)` gives two related identities worth
knowing: `tan^2(x) + 1 = sec^2(x)` and `1 + cot^2(x) = csc^2(x)`.

## 7. Graphs of Sine and Cosine

The parent graphs `y = sin(x)` and `y = cos(x)` both oscillate between `-1` and `1` with
period `2π`. `sin(x)` starts at `0` (passing upward through the midline); `cos(x)` starts
at its maximum, `1`.

### General Form

```
y = a * sin(b(x - h)) + k
y = a * cos(b(x - h)) + k
```

| Parameter | Effect | How to read it |
|---|---|---|
| `a` | amplitude | vertical stretch; height above/below midline is `|a|` |
| `b` | affects period | period `= 2π / |b|` |
| `h` | phase shift | horizontal shift, `h` units (right if positive) |
| `k` | midline / vertical shift | midline is `y = k`; range is `[k - |a|, k + |a|]` |

**Example**: `y = 3*sin(2(x - π/4)) + 1`. Amplitude `= 3`, period `= 2π/2 = π`, phase shift
`= π/4` (right), midline `y = 1`, range `[-2, 4]`.

**Example**: Write an equation for a cosine curve with amplitude `4`, period `π`, no phase
shift, midline `y = -2`. Period `π = 2π/b` → `b = 2`. So `y = 4*cos(2x) - 2`.

## 8. Applications

**Point on the terminal side**: if `(x, y)` is a point (not necessarily on the unit circle)
on the terminal side of `θ`, first find `r = √(x^2 + y^2)`, then:

```
sin(θ) = y/r     cos(θ) = x/r     tan(θ) = y/x
```

**Example**: The terminal side of `θ` passes through `(-3, 4)`. `r = √(9 + 16) = 5`.
`sin(θ) = 4/5`, `cos(θ) = -3/5`, `tan(θ) = -4/3`.

**Word problem example**: A 20-ft ladder leans against a wall, making a `65°` angle with
the ground. How high up the wall does it reach? The height is opposite the angle, the
ladder is the hypotenuse, so `sin(65°) = h/20` → `h = 20*sin(65°) ≈ 20(0.9063) ≈ 18.13` ft.

## 9. Quick Reference

| Concept | Key idea |
|---|---|
| Degrees ↔ radians | multiply by `π/180` or `180/π` |
| Unit circle point | `(cos θ, sin θ)` |
| SOH-CAH-TOA | `sin = opp/hyp`, `cos = adj/hyp`, `tan = opp/adj` |
| Reciprocal functions | `csc = 1/sin`, `sec = 1/cos`, `cot = 1/tan` |
| Pythagorean identity | `sin^2(x) + cos^2(x) = 1` |
| Reference angle | acute angle to the x-axis; sets the base value |
| ASTC | quadrant signs: **A**ll (I), **S**ine (II), **T**angent (III), **C**osine (IV) |
| Amplitude | `|a|` in `y = a*sin(b(x-h)) + k` |
| Period | `2π / |b|` |
| Phase shift | `h` (horizontal shift) |
| Midline | `y = k` |

## 10. Practice Problems

1. Convert `210°` to radians, and convert `5π/3` radians to degrees.
2. Using the unit circle, find `cos(315°)` and `sin(315°)` exactly.
3. Find the reference angle for `θ = 150°` and use it to find `tan(150°)`.
4. Find all six trig function values for `θ` given the point `(-8, 15)` on its terminal
   side.
5. If `cos(θ) = -5/13` and `θ` is in Quadrant III, find `sin(θ)`.
6. State the amplitude, period, phase shift, and midline of `y = -2*sin(3(x + π/6)) + 5`.
7. Write an equation for a sine function with amplitude `5`, period `4π`, no phase shift,
   midline `y = 0`.
8. A kite string makes a `50°` angle with the ground and is `100` ft long. How high is the
   kite above the ground?

<details>
<summary>Answers</summary>

1. `210° * π/180 = 7π/6`; `5π/3 * 180/π = 300°`
2. Reference angle `45°`, Quadrant IV (cos +, sin −): `cos(315°) = √2/2`, `sin(315°) = -√2/2`
3. Quadrant II, reference angle `= 180° - 150° = 30°`; `tan(30°) = √3/3`, tangent negative
   in Quadrant II → `tan(150°) = -√3/3`
4. `r = √((-8)^2 + 15^2) = √(64+225) = √289 = 17`. `sin(θ) = 15/17`, `cos(θ) = -8/17`,
   `tan(θ) = -15/8`, `csc(θ) = 17/15`, `sec(θ) = -17/8`, `cot(θ) = -8/15`
5. `sin^2(θ) = 1 - 25/169 = 144/169` → `sin(θ) = ±12/13`; Quadrant III → sine negative →
   `sin(θ) = -12/13`
6. Amplitude `= 2`, period `= 2π/3`, phase shift `= -π/6` (left), midline `y = 5`
7. Period `4π = 2π/b` → `b = 1/2`. `y = 5*sin((1/2)x)`
8. `sin(50°) = h/100` → `h = 100*sin(50°) ≈ 100(0.766) ≈ 76.6` ft

</details>

## 11. Most Frequently Missed on SAT/ACT

Trig is a small slice of both tests — on the ACT it's roughly 3-4 of the 45 questions
(~7%), clustered in the harder second half and almost always plain SOH-CAH-TOA (the ACT
will have you set up a ratio like `cos x = 4/5` but never make you evaluate an inverse
trig function for an actual angle). On the SAT it lives inside "Additional Topics in Math"
(~10% of the section, shared with geometry and complex numbers) and does pull in unit
circle / radian ideas. Even so, these are the mistakes that account for most of the
missed points:

- **Flipping the unit-circle coordinate order.** A point on the unit circle is
  `(cos θ, sin θ)` — x-coordinate first. It's easy to write it backwards as
  `(sin θ, cos θ)`, especially under time pressure.
- **Dropping the sign when using a reference angle.** The reference angle gives the
  correct magnitude, not the correct sign — students find `sin(30°) = 1/2` and forget
  that in Quadrant III sine is negative, so `sin(210°) = -1/2`, not `1/2`. Recheck with
  ASTC every time.
- **Wrong calculator mode.** Radian mode on a degree problem (or vice versa) gives a
  number that looks plausible but is completely wrong — there's no error message, so the
  mistake often isn't caught. Check the mode before evaluating anything.
- **Picking the wrong Law.** Law of Sines (`a/sin A = b/sin B = c/sin C`) needs a matched
  angle-side pair; Law of Cosines (`c^2 = a^2 + b^2 - 2ab*cos C`) is for SAS/SSS triangles
  with no such pair. Grabbing Law of Sines when you only have SAS leaves an equation with
  two unknowns and no way to solve it.
- **Reaching for inverse trig on the ACT.** ACT trig questions stop at a simplified ratio
  — they never ask you to solve for the angle itself. Trying to compute `arcsin`/`arccos`/
  `arctan` anyway burns time on a step the question never asked for.

### Practice

1. A point on the unit circle corresponds to `θ = 300°`. Which of the following is the
   point's coordinate pair?
   `(A) (-1/2, √3/2)`  `(B) (1/2, -√3/2)`  `(C) (-√3/2, -1/2)`  `(D) (√3/2, 1/2)`
2. In triangle `ABC`, `a = 7`, `b = 9`, and the included angle `C = 40°`. Which equation
   correctly starts the solution for side `c`?
   `(A) c/sin C = a/sin A`  `(B) c^2 = 7^2 + 9^2 - 2(7)(9)cos(40°)`
   `(C) c = 7*sin(40°)`  `(D) c^2 = 7^2 + 9^2 + 2(7)(9)sin(40°)`

<details>
<summary>Answers</summary>

1. **(B)**. Reference angle `60°` in Quadrant IV: cosine positive, sine negative, so
   `(cos 300°, sin 300°) = (1/2, -√3/2)`. `(A)` swaps the sign pattern for Quadrant II,
   `(C)` reverses the coordinate order (the `(sin θ, cos θ)` trap), `(D)` is the
   Quadrant I reference pair with no sign adjustment at all.
2. **(B)**. This is SAS — two sides and the included angle, no angle-side pair — so Law
   of Cosines applies. `(A)` is the Law of Sines setup, the classic wrong-Law choice when
   no angle-side pair exists. `(C)` treats the triangle as if it were a right triangle
   with SOH-CAH-TOA, which doesn't apply here. `(D)` uses the Law of Cosines formula with
   the sign and function both wrong (`+` instead of `-`, `sin` instead of `cos`).

</details>
