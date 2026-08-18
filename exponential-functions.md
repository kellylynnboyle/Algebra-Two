# Exponential Functions and Equations — Algebra II Study Notes (Unit 4)

> Per the course syllabus ([course-info.md](course-info.md)), "Exponential Functions and
> Equations" is Unit 4 of Algebra II (Mrs. Samir / Mr. Schacter, Period 5). The Schoology
> materials page itself couldn't be reached from this environment (NMUSD login required,
> domain blocked by network egress rules), so the syllabus's specific reading/assignment
> list for this unit isn't reflected here — these notes cover the standard curriculum for
> the topic. Paste in specifics from Schoology (subtopic order, vocab list, assigned
> problems) to refine further.

## 1. Exponential Functions

An **exponential function** has the form:

```
f(x) = a * b^x
```

- `a` is the **initial value** — the value of `f(x)` when `x = 0` (since `b^0 = 1`,
  `f(0) = a`).
- `b` is the **base**, or **growth/decay factor** — it must satisfy `b > 0` and `b ≠ 1`.
- The variable `x` is in the *exponent*, which is what makes these different from
  polynomials (where the variable is in the base).

**Example**: `f(x) = 3 * 2^x` → `f(0) = 3`, `f(1) = 6`, `f(2) = 12`, `f(3) = 24` — each
output is double the previous one.

## 2. Growth vs. Decay

| Condition | Behavior | Example |
|---|---|---|
| `b > 1` | **exponential growth** — increases as `x` increases | `f(x) = 2^x` |
| `0 < b < 1` | **exponential decay** — decreases as `x` increases | `f(x) = (1/2)^x` |

### Graph Shape

For `f(x) = a * b^x` with `a > 0`:

- **Growth (`b > 1`)**: rises slowly on the left, then increases sharply going right;
  approaches `y = 0` as `x → -∞`.
- **Decay (`0 < b < 1`)**: falls sharply on the left, then flattens toward `y = 0` going
  right; approaches `y = 0` as `x → +∞`.
- Both pass through `(0, a)` — the **y-intercept** equals the initial value.
- Both have a **horizontal asymptote** at `y = 0` (the graph gets arbitrarily close to
  the x-axis but never touches or crosses it, since `b^x > 0` for all real `x`).
- Domain: all real numbers. Range: `y > 0` (assuming `a > 0`).

**Example**: `f(x) = 5 * (1/2)^x` is decay (`b = 1/2 < 1`), initial value `5`, horizontal
asymptote `y = 0`. `f(0) = 5, f(1) = 2.5, f(2) = 1.25, ...` — shrinking toward 0.

A vertical shift `f(x) = a * b^x + k` moves the asymptote to `y = k`.

## 3. The Natural Base `e`

`e` is a special irrational constant, `e ≈ 2.71828...`, that arises naturally in growth
processes (it's the limit of `(1 + 1/n)^n` as `n → ∞`). Functions built on it look like:

```
f(x) = a * e^(kx)
```

- If `k > 0`, this is exponential **growth**.
- If `k < 0`, this is exponential **decay**.
- `e` behaves like any other base `> 1` for graphing purposes — same general growth shape,
  asymptote `y = 0`.

**Example**: `f(x) = 100 * e^(0.05x)` models continuous growth at a 5% rate; `f(x) = 100 *
e^(-0.03x)` models continuous decay at a 3% rate.

## 4. Compound Interest

**Compounded `n` times per year**:

```
A = P(1 + r/n)^(nt)
```

- `A` = final amount, `P` = principal (starting amount), `r` = annual interest rate
  (decimal), `n` = number of compounding periods per year, `t` = time in years.

| `n` | Compounding |
|---|---|
| 1 | annually |
| 4 | quarterly |
| 12 | monthly |
| 365 | daily |

**Example**: `P = 1000, r = 0.06, n = 12, t = 5` →
`A = 1000(1 + 0.06/12)^(12*5) = 1000(1.005)^60 ≈ 1000(1.34885) ≈ $1348.85`

**Continuous compounding** (as `n → ∞`) uses `e`:

```
A = Pe^(rt)
```

**Example**: same numbers, continuous: `A = 1000 * e^(0.06*5) = 1000 * e^0.3 ≈ 1000 *
1.34986 ≈ $1349.86` — slightly more than monthly compounding, as expected (continuous
compounding is the theoretical maximum for a given rate).

## 5. Logarithms — the Inverse of Exponentials

Since exponential functions are one-to-one, they have inverses: **logarithms**.

```
log_b(x) = y   means the same thing as   b^y = x
```

Read `log_b(x)` as "log base `b` of `x`" — "the power `b` must be raised to, to get `x`."

**Example**: `log_2(8) = 3` because `2^3 = 8`.
**Example**: `log_5(1) = 0` because `5^0 = 1`.
**Example**: `log_3(1/9) = -2` because `3^(-2) = 1/9`.

- Domain of `log_b(x)`: `x > 0` (you can't raise a positive base to any real power and
  get a non-positive result).
- `log_b(1) = 0` always (since `b^0 = 1`).
- `log_b(b) = 1` always (since `b^1 = b`).
- The graph of `y = log_b(x)` is the reflection of `y = b^x` across the line `y = x`; it
  has a **vertical asymptote** at `x = 0` instead of a horizontal one.

### Common Log and Natural Log

| Name | Notation | Base |
|---|---|---|
| Common log | `log(x)` | 10 (base usually omitted) |
| Natural log | `ln(x)` | `e` |

`log(x)` means `log_10(x)`; `ln(x)` means `log_e(x)`. Both work exactly like any other
base under the definition above.

**Example**: `log(100) = 2` because `10^2 = 100`.
**Example**: `ln(e^3) = 3` because raising `e` to the 3rd power gives `e^3`.

## 6. Properties of Logarithms

For `b > 0, b ≠ 1`, and `M, N > 0`:

| Property | Rule |
|---|---|
| Product rule | `log_b(MN) = log_b(M) + log_b(N)` |
| Quotient rule | `log_b(M/N) = log_b(M) - log_b(N)` |
| Power rule | `log_b(M^p) = p * log_b(M)` |
| Change of base | `log_b(x) = log(x)/log(b) = ln(x)/ln(b)` |

Change of base lets you evaluate any log on a calculator, which usually only has `log`
(base 10) and `ln` (base `e`) buttons.

**Example (product)**: `log_2(4 * 8) = log_2(4) + log_2(8) = 2 + 3 = 5` (check:
`log_2(32) = 5` ✓)

**Example (quotient)**: `log_3(27/9) = log_3(27) - log_3(9) = 3 - 2 = 1` (check:
`log_3(3) = 1` ✓)

**Example (power)**: `log_5(25^3) = 3 * log_5(25) = 3 * 2 = 6`

**Example (change of base)**: `log_7(50) = ln(50)/ln(7) ≈ 3.912/1.946 ≈ 2.010`

## 7. Solving Exponential Equations

**Same-base method**: if the bases can be made equal, set the exponents equal.

**Example**: `2^x = 32` → `2^x = 2^5` → `x = 5`

**Log method**: if the bases can't easily be matched, take the log (or ln) of both sides,
then use the power rule to bring the exponent down.

**Example**: `3^x = 20`
```
log(3^x) = log(20)
x * log(3) = log(20)
x = log(20)/log(3) ≈ 1.301/0.477 ≈ 2.727
```

**Example**: `5 * e^(2x) = 40`
```
e^(2x) = 8
ln(e^(2x)) = ln(8)
2x = ln(8)
x = ln(8)/2 ≈ 2.079/2 ≈ 1.040
```

## 8. Solving Logarithmic Equations

**Single log, isolate then exponentiate**: rewrite the log equation in exponential form
using the definition from Section 5.

**Example**: `log_4(x) = 3` → `x = 4^3 = 64`

**Multiple logs, condense first**: use the product/quotient rules to combine into a
single log, then exponentiate. Always **check for extraneous solutions** — the argument
of a log must stay positive.

**Example**: `log_2(x) + log_2(x - 2) = 3`
```
log_2(x(x-2)) = 3
x(x - 2) = 2^3 = 8
x^2 - 2x - 8 = 0
(x - 4)(x + 2) = 0
x = 4  or  x = -2
```
Check `x = -2`: `log_2(-2)` is undefined → **extraneous, rejected**. Only `x = 4` works.

## 9. Applications

### Population Growth

```
P(t) = P_0 * b^t          or          P(t) = P_0 * e^(kt)
```

`P_0` is the initial population; `b` (or `k`) reflects the growth rate.

**Example**: A town starts with 5,000 people, growing 3% per year:
`P(t) = 5000 * (1.03)^t`. After 10 years: `P(10) = 5000 * (1.03)^10 ≈ 5000 * 1.3439 ≈
6720` people.

### Radioactive Decay and Half-Life

```
A(t) = A_0 * (1/2)^(t/h)
```

`A_0` = initial amount, `h` = half-life (time for half the substance to decay), `t` =
elapsed time (same units as `h`).

**Example**: A 100 g sample has a half-life of 20 years. How much remains after 60 years?
```
A(60) = 100 * (1/2)^(60/20) = 100 * (1/2)^3 = 100 * 1/8 = 12.5 g
```

**Example (solving for half-life)**: A substance decays from 80 g to 10 g in 30 years.
Find the half-life.
```
10 = 80 * (1/2)^(30/h)
1/8 = (1/2)^(30/h)
(1/2)^3 = (1/2)^(30/h)
3 = 30/h
h = 10 years
```

## 10. Quick Reference

| Concept | Key idea |
|---|---|
| `f(x) = a * b^x` | `a` = initial value (y-intercept), `b` = growth/decay factor |
| Growth vs. decay | `b > 1` growth; `0 < b < 1` decay |
| Asymptote | `y = 0` for `f(x) = a*b^x` (horizontal); `x = 0` for `log_b(x)` (vertical) |
| Natural base | `e ≈ 2.71828`; `f(x) = a*e^(kx)`, `k > 0` growth, `k < 0` decay |
| Compound interest | `A = P(1 + r/n)^(nt)` |
| Continuous compounding | `A = Pe^(rt)` |
| Log definition | `log_b(x) = y` ⟺ `b^y = x` |
| Common / natural log | `log(x)` = base 10; `ln(x)` = base `e` |
| Product rule | `log_b(MN) = log_b(M) + log_b(N)` |
| Quotient rule | `log_b(M/N) = log_b(M) - log_b(N)` |
| Power rule | `log_b(M^p) = p*log_b(M)` |
| Change of base | `log_b(x) = ln(x)/ln(b)` |
| Solving `b^x = k` | take log/ln of both sides, bring down exponent |
| Solving log equations | condense to one log, rewrite as exponential, check domain |
| Half-life | `A(t) = A_0 * (1/2)^(t/h)` |

## 11. Practice Problems

1. For `f(x) = 4 * 3^x`, identify the initial value and the base, and state whether it's
   growth or decay.
2. Evaluate `log_4(64)`.
3. Use log properties to expand: `log_2(8x^3/y)`.
4. Solve for `x`: `7^x = 49^2`
5. Solve for `x` (round to 3 decimal places): `4^x = 30`
6. Solve: `log_3(x) + log_3(x - 6) = 3`
7. $2,000 is invested at 4% annual interest, compounded monthly. Find the balance after
   8 years.
8. A radioactive isotope has a half-life of 5 days. Starting with 40 mg, how much remains
   after 15 days?

<details>
<summary>Answers</summary>

1. Initial value `a = 4`, base `b = 3`; since `b > 1`, this is **growth**.
2. `log_4(64) = 3`, since `4^3 = 64`.
3. `log_2(8x^3/y) = log_2(8) + log_2(x^3) - log_2(y) = 3 + 3*log_2(x) - log_2(y)`
4. `7^x = 49^2 = (7^2)^2 = 7^4` → `x = 4`
5. `4^x = 30` → `x = log(30)/log(4) ≈ 1.477/0.602 ≈ 2.453`
6. `log_3(x(x-6)) = 3` → `x^2 - 6x = 27` → `x^2 - 6x - 27 = 0` → `(x-9)(x+3) = 0` →
   `x = 9` or `x = -3`; `x = -3` makes `log_3(x)` undefined → extraneous. **`x = 9`**
7. `A = 2000(1 + 0.04/12)^(12*8) = 2000(1.003333)^96 ≈ 2000 * 1.3771 ≈ $2754.15`
8. `A(15) = 40 * (1/2)^(15/5) = 40 * (1/2)^3 = 40 * 1/8 = 5` mg

</details>

## 12. Most Frequently Missed on SAT/ACT

Exponential functions are a favorite test topic, and test-prep data (Achievable, Khan
Academy SAT prep, SATsphere, TangibleLearning) points to the same handful of traps
showing up again and again. One scope note first: the **digital SAT never requires
logs** — its exponential growth/decay questions can always be solved by plugging in
values or setting up a ratio algebraically. The **ACT does test logs directly**
(evaluating them, log properties, solving log equations), so Sections 5–8 above matter
far more for ACT-takers than SAT-takers.

- **Linear vs. exponential phrasing.** The test leans hard on wording: "increases by a
  fixed *amount* each year" means add (linear); "increases by a fixed *percentage*" or
  "doubles/triples/halves" means multiply (exponential). Misreading this sets up the
  wrong equation entirely — answer choices are often built as 2 linear options + 2
  exponential options specifically to catch this.
- **Power rule vs. product rule mix-up.** `(x^a)^b = x^(ab)`, not `x^(a+b)` — that
  addition rule is for `x^a * x^b`. Confusing the two is one of the most common algebra
  slips inside an otherwise correct exponential setup.
- **Misreading `a` and `b` in `y = a*b^x`.** `a` is the initial value (y-intercept), `b`
  is the repeated multiplier. This gets worse with percentages: "a 5% annual increase"
  means `b = 1.05`, not `b = 0.05` or `b = 1.5`.
- **Compounding formula confusion.** Mixing up discrete compounding
  `A = P(1 + r/n)^(nt)` with continuous compounding `A = Pe^(rt)`, or forgetting to
  divide `r` by `n` and multiply `t` by `n` inside the discrete formula.
- **Over-relying on "plug into calculator."** Some multi-step exponential equations
  genuinely require isolating a variable exponent algebraically (see Section 7).
  Students used to grabbing a calculator for everything get stuck without a working
  grasp of log properties — a bigger risk on the ACT, since the SAT is built so logs
  aren't required.

### Practice

1. A population of bacteria increases by 20 people every hour. Which equation models the
   population `P` after `t` hours, starting from 500?
2. An investment of $1,000 grows at 5% annual interest, compounded quarterly. Which
   expression gives the balance after 6 years?

<details>
<summary>Answers</summary>

1. **`P = 500 + 20t`** (linear — "increases by a fixed amount" means add, not multiply).
   Picking `P = 500(1.20)^t` would be the classic trap: treating a flat amount increase
   as if it were a percentage increase.
2. **`A = 1000(1 + 0.05/4)^(4*6)`**. The trap answers: `1000(1.05)^6` forgets to divide
   the rate by `n` and multiply time by `n` (treats it like annual compounding);
   `1000e^(0.05*6)` swaps in the continuous-compounding formula instead of the discrete
   one the problem actually describes.

</details>

