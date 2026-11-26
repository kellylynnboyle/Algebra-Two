# Unit 1 Sequences — Class Packet Study Guide

[Take the packet quiz →](quizzes/unit-1-sequences-packet.html) · [General notes on sequences and series](sequences-and-series.md)

This guide follows the actual class packet (`scan_20260819030552.pdf`, "UNIT 1 Sequences",
packet pages 1–26) worksheet by worksheet. Use it to learn the method for each page, then
check your own work against the answers at the bottom.

> **About the scan:** the PDF in this repo is cut off at the end — 27 pages are readable, the
> bottom of packet page 26 and anything after it are missing. Re-upload it if there were more
> pages. Packet page 3 (the graphing grids for Sorting Sequences) has no problems to solve.

## What this unit actually asks for

The packet is narrower and deeper than a textbook "sequences and series" chapter:

- **In the packet:** arithmetic vs. geometric vs. neither, common difference / common ratio,
  **recursive** formulas, **explicit** formulas, moving between a list, table, graph, dot
  pattern and story, word problems, missing terms (arithmetic and geometric means), domain and
  range, and linking sequences to **linear** and **exponential** functions.
- **Not in the packet:** series, sigma notation, sum formulas, infinite geometric series.
  Those are in [sequences-and-series.md](sequences-and-series.md) in case they come later, but
  nothing in this packet needs them.

## 1. Notation the packet uses

The packet switches between three ways of writing the same thing. All of these mean
"the n-th term":

| Subscript | Function style | Meaning |
|---|---|---|
| `a_1` | `a(1)` or `f(1)` | 1st term |
| `a_n` | `a(n)` or `f(n)` | n-th term |
| `a_(n-1)` | `a(n-1)` or `f(n-1)` | the term just **before** the n-th term |

`a(n-1)` does **not** mean "a times (n − 1)" and does not mean "the term minus 1". It means
"the previous term".

## 2. Arithmetic, geometric, or neither

Test every sequence the same way:

1. **Subtract** neighbours (later − earlier). Same answer every time → **arithmetic**, and
   that answer is the **common difference `d`**.
2. If not, **divide** neighbours (later ÷ earlier). Same answer every time → **geometric**,
   and that answer is the **common ratio `r`**.
3. If neither is constant → **neither** (it may still have a pattern).

Things that trip people up:

- Decreasing arithmetic sequences have a **negative** `d` (`35, 32, 29` → `d = −3`).
- Shrinking geometric sequences have a **fraction** `r` (`100, 50, 25` → `r = 1/2`, not 2 and
  not −50).
- Alternating signs mean a **negative** `r` (`4, −20, 100` → `r = −5`).
- Check **every** gap. `−7, −9, −11, −18` looks arithmetic until the last gap (−7).
- Decimals and fractions follow the same rules (`52.2, 55.7, 59.2` → `d = 3.5`;
  `1/5, 2/5, 3/5` → `d = 1/5`).

## 3. Recursive formulas

A recursive formula says how to get the **next** term from the **previous** one. It needs two
parts — leave either out and it's incomplete:

```
a(1) = starting value
a(n) = a(n-1) [operation]
```

- Arithmetic: `a(1) = first term`, `a(n) = a(n-1) + d`
- Geometric: `a(1) = first term`, `a(n) = a(n-1) · r`

Why the first term matters (from the Matching page): `a_n = a_(n-1) + 3` describes both
`2, 5, 8, 11, ...` and `21, 24, 27, 30, ...`. The rule alone doesn't pick out one sequence.

Some recursive rules are neither arithmetic nor geometric. Just run them one step at a time:

- `c(1) = 2, c(n) = 2·c(n-1) − 1` → `2, 3, 5, 9, 17, ...` (double, then subtract 1)
- `d(1) = 10, d(n) = d(n-1) + n` → `10, 12, 15, 19, ...` (add the **term number**: +2, +3, +4)

For that second kind, the thing you add changes each step. When finding `a(2)`, `n` is 2.

## 4. Explicit formulas

An explicit formula jumps straight to any term, no need to list the ones before it.

**Where it comes from (the "Building Explicit Formulas" page).** Take the cross-shaped dot
pattern, `a(1) = 13, a(n) = a(n-1) + 4`:

| Fig | Dots | Expanded |
|---|---|---|
| 1 | 13 | 13 |
| 2 | 17 | 13 + 4 |
| 3 | 21 | 13 + 4 + 4 |
| 4 | 25 | 13 + 4 + 4 + 4 |
| 10 | 49 | 13 + 9 fours |
| n | | 13 + (n − 1) fours |

Figure n has had **n − 1** fours added, because figure 1 has had none. That's the whole
reason for the `n − 1`:

```
Arithmetic:  a(n) = a(1) + d(n − 1)
Geometric:   a(n) = a(1) · r^(n − 1)
```

The geometric one works the same way with repeated multiplying: for
`g(1) = 3, g(n) = g(n-1) · 2`, figure 4 is `3 · 2 · 2 · 2 = 3 · 2^3`, so `g(n) = 3 · 2^(n-1)`.

**Simplified form.** Arithmetic formulas are usually simplified to look like a line:
`13 + 4(n − 1) = 4n + 9`. The Kuta page writes them this way (`a_n = −11 + 7n`). In that form
the number multiplying `n` is `d`, and the constant is the "zeroth term" (`a(1) − d`), **not**
the first term.

**Recursive → explicit:** read off `a(1)` and `d` (or `r`), drop them into the formula.
`f(n) = f(n-1) − 2; f(1) = 8` → `f(n) = 8 − 2(n − 1) = 10 − 2n`.

**When there is no easy explicit rule.** The homework page says some sequences can't be given
an explicit rule at this level — Fibonacci (`0, 1, 1, 2, 3, 5, 8`) is the one. Its recursive
rule needs **two** starting terms: `a_1 = 0, a_2 = 1, a_n = a_(n-1) + a_(n-2)`.

## 5. Missing terms (arithmetic and geometric means)

Count the **jumps**, not the blanks. Jumps = blanks + 1.

- **Arithmetic:** `d = (last − first) ÷ jumps`.
  `19, __, __, __, 71` → 4 jumps → `d = (71 − 19)/4 = 13` → `32, 45, 58`.
- **Geometric:** `r^jumps = last ÷ first`, then take the root.
  `2, __, __, __, 162` → `r^4 = 81` → `r = 3` → `6, 18, 54`.

With an **even** number of jumps, a negative ratio also works (`r = −3` gives `−6, 18, −54`).
With an **odd** number of jumps the sign is forced: `1/9, __, __, −3` → `r^3 = −27` → `r = −3`.

If the terms are given as `f(3) = 5` and `f(4) = 8`, they are neighbours, so `d = 3`. If they
are not neighbours, subtract the term numbers to get the jumps.

## 6. Word problems — what does n = 1 mean?

This is where most points are lost. Before writing a formula, decide what the first term is.

**"Starts with" vs. "after the first".**

- *Sally had $225 after her 1st paycheck and $1275 after her 8th.* Paycheck 1 → 8 is **7**
  jumps: `(1275 − 225)/7 = 150` per week. `a(1) = 225, a(n) = a(n-1) + 150`. Before she
  started she had `225 − 150 = $75` — that's the "zeroth term".
- *Claire has $300 and takes out $25 each month.* $300 is the amount **before** month 1. After
  month n she has `300 − 25n`, so `a(1) = 275`. Writing `300 − 25(n − 1)` instead would make
  month 1 equal $300, which is wrong for "after month 1".
- *Viola has 13 baskets and makes 12 more each of 15 work days.* `13 + 12 · 15 = 193`. If you
  call 13 the first term, the answer is term **16**, not term 15.
- *A ball dropped from 15 ft rebounds to 85%.* The 3rd bounce is `15 · 0.85^3 ≈ 9.2 ft`. If
  `a(1) = 15` is the drop, the 3rd bounce is `a(4)`.

**Percent change is geometric.** Multiply by what is **left**, not by the percent lost:

- depreciates 10% → `× 0.90`
- gives away 60% → `× 0.40`
- rebounds to 85% → `× 0.85`
- "takes out half" → `× 1/2`

**"Takes out $25" vs. "takes out half".** A fixed amount is arithmetic (subtract). A fixed
fraction or percent is geometric (multiply). The packet puts these side by side on purpose
(Claire, problems 4 and 5).

**The packet's required steps** (word-problem page): (a) say arithmetic or geometric and why,
(b) write the explicit formula and say where each number came from, (c) say what `n` is and
solve, (d) answer in a sentence.

## 7. Tables, graphs, and function families

- **Arithmetic ↔ linear.** Graph is dots along a straight line. `d` is the slope.
- **Geometric ↔ exponential.** Graph is dots along a curve that gets steeper (`r > 1`) or
  flattens toward zero (`0 < r < 1`).
- Graphs of sequences are **separate dots**, not a connected line — there is no term 1.5.
- **Domain** = the term numbers (`1, 2, 3, ...`, or `0, 1, 2, ...` if the table starts at 0).
  In a story it may stop: Laura's $600 at −$50 a month runs out at month 12.
- **Range** = the term values themselves (a list of separate numbers, not an interval).
- A table that starts at **0** (folds in paper: 0 → 1 rectangle) gives a cleaner formula with
  no `n − 1`: `f(n) = 2^n`.

## 8. Answers to check your work

Do the page first; then compare. Recursive answers always need both lines.

<details>
<summary>Sorting Sequences, Task B #4 (packet p. 2)</summary>

a) arithmetic, `d = 10` · b) geometric, `r = 3` · c) arithmetic, `d = 5` · d) geometric,
`r = 1/2` · e) geometric, `r = 10` · f) arithmetic, `d = 1/5` · g) arithmetic, `d = 3.5` ·
h) geometric, `r = 5`

</details>

<details>
<summary>Ready, Set, Go — Recognizing sequences (packet p. 4)</summary>

1. geometric, `r = −5`: `2500, −12500`
2. neither (gaps grow +2, +3, +4): `17, 23`
3. geometric, `r = 3/4`: `20.25, 15.1875`
4. arithmetic, `d = −0.75`: `−1.5, −2.25`
5. geometric, `r = 1/4`: `5/32, 5/128`
6. neither (×10 then +1): `11111, 111111`
7. geometric, `r = 1.5`: `−18.225, −27.3375`
8. arithmetic, `d = 17`: `4, 21`
9. Any patterned sequence with no constant difference or ratio, e.g. `1, 4, 9, 16`.

</details>

<details>
<summary>Recursive Formulas from Patterns (packet pp. 5–6)</summary>

**Pattern 1 (cross):** `13, 17, 21, 25, 29, 33, 37, 41, 45, 49`. Each figure adds 4 dots (one
on each arm). `a(1) = 13, a(n) = a(n-1) + 4`. Figure 100 = figure 99 + 4. Figure n:
`13 + 4(n − 1) = 4n + 9`.

**Pattern 2 (three blocks):** `3, 6, 12, 24, 48, 96, 192, 384, 768, 1536`. Each figure doubles.
`a(6) = a(5) · 2`. `a(1) = 3, a(n) = a(n-1) · 2`.

</details>

<details>
<summary>HW: Expanding sequences from recursive formulas (packet p. 7)</summary>

a) `10, 12, 14, 16, 18, 20, 22, 24, 26, 28`
b) `10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120`
c) `2, 3, 5, 9, 17, 33, 65, 129, 257, 513`
d) `128, 64, 32, 16, 8, 4, 2, 1, 1/2, 1/4`

</details>

<details>
<summary>Matching Activity (packet p. 8)</summary>

1 W · 2 A · 3 T · 4 E · 5 R → **WATER**
6 J · 7 U · 8 I · 9 C · 10 E → **JUICE**

Check for #5: `4·2 − 5 = 3`, `4·3 − 5 = 7`, `4·7 − 5 = 23`, `4·23 − 5 = 87`.

</details>

<details>
<summary>Recursive Formulas from Word Problems (packet pp. 9–10)</summary>

**Sally:** `225, 375, 525, 675, 825, 975, 1125, 1275`. Paid $150 a week
(`(1275 − 225) ÷ 7`). `a(1) = 225, a(n) = a(n-1) + 150` — each week's balance is last week's
plus $150. She had $75 before she started.

**Johnny:** `17000, 15300, 13770, 12393, 11153.70, 10038.33, 9034.50, 8131.05`. After 8 years
≈ **$8,131.05**. `a(1) = 17000, a(n) = a(n-1) · 0.9` — each year the car keeps 90% of last
year's value. Original price: `17000 ÷ 0.9 ≈ $18,888.89`.

**Problem 3:** Sally is **linear** (constant difference, straight-line graph). Johnny is
**exponential** (constant ratio, curved graph).

</details>

<details>
<summary>Recursive Review, Sequences 3.5 (packet p. 11)</summary>

1. `17`, `35`; d = 6
2. `−5, −9`; d = −4
3. `21, 34`; d = 13
4. `2/3, 4/3`; d = 2/3
5. `10, 15, 20`; d = 5
6. `−1, −5, −9`; d = −4
7. `f(5) = 11, f(6) = 14`; `f(n) = f(n-1) + 3`
8. `f(4) = 4, f(5) = −4`; `f(n) = f(n-1) − 8`
9. `f(7) = 13.7, f(8) = 18.7`; `f(n) = f(n-1) + 5`

</details>

<details>
<summary>Getting Precise w/ Recursive Formulas (packet pp. 12–13)</summary>

**1)** A) `29, 39, 49, 59` · B) `−4, −2, 1, 5` (add n: +2, +3, +4) · C) `−1, −2, −4, −8` ·
D) `10, 12, 14, 16`

**2)** A) `a_10 = −1 · 4^9 = −262,144` · B) `a_10 = −3 · 3^9 = −59,049` ·
C) `a_10 = 11 + 9(10) = 101` · D) the scan is unclear on whether the rule is `2 + a_(n-1)` or
`12 + a_(n-1)`: that gives `−14 + 9(2) = 4` or `−14 + 9(12) = 94`. Check your paper copy.

**3)** A) `20`; difference 5 · B) `11, 17`; difference 3 · C) `5, 1.25`; ratio 1/2 ·
D) `18`; difference −6

**4)** A) arithmetic: `a_1 = 3, a_n = a_(n-1) + 4`
B) arithmetic: 3 pieces every 5 days → totals `3, 6, 9, ...` per 5-day period:
`a_1 = 3, a_n = a_(n-1) + 3`
C) arithmetic: `a_1 = 2, a_n = a_(n-1) + 2`
D) geometric (`8 ÷ 5 = 1.6`): `a_1 = 5, a_n = a_(n-1) · 1.6`
E) geometric: `a_1 = 1, a_n = a_(n-1) · 2`
F) geometric: `a_1 = 2, a_n = a_(n-1) · 2`

</details>

<details>
<summary>Building Explicit Formulas (packet pp. 14–15)</summary>

**Problem 1:** `13, 17, 21, 25, 29, 33`. Figure 10: `49` (9 fours added). Figure 25: `109`
(24 fours). Figure 100: `409` (99 fours). Figure n: `13 + 4(n − 1)`, which is `4n + 9`.

**Problem 2:** `3, 6, 12, 24, 48, 96`. Expanded: `3`, `3·2`, `3·2·2`, ... Figure 10:
`3 · 2^9 = 1536`. Figure n: `3 · 2^(n-1)`.

</details>

<details>
<summary>Arithmetic and Geometric Sequence Word Problems (packet p. 16)</summary>

1. Arithmetic (adds 4 each quiz). `a_n = 57 + 4(n − 1)`; `n = 9` → `57 + 32 = 89`. Joey scores
   89 on his 9th quiz.
2. Geometric (multiplies by 0.85 each bounce). With `a_1 = 15` as the drop height,
   `a_n = 15(0.85)^(n-1)` and the third bounce is `n = 4`: `15(0.85)^3 ≈ 9.2`. The ball
   rebounds about 9.2 feet.
3. Arithmetic (adds 12 each day). With `a_1 = 13`, `a_n = 13 + 12(n − 1)` and after 15 work
   days `n = 16`: `13 + 180 = 193`. Viola will have 193 baskets.

</details>

<details>
<summary>Geometric means, 4.4 (packet p. 17)</summary>

12. `6, 18, 54` (r = 3; `−6, 18, −54` with r = −3 also fits)
13. `−1/3, 1, [−3], 9` (r = −3)
14. `5, 2.5, 1.25` (r = 1/2; or `−5, 2.5, −1.25`)
15. `gz, gz², gz³` (r = z)
16. `−9, −27, −81` (r = 3; or `9, −27, 81`)

</details>

<details>
<summary>Go — geometric recursive and explicit; first TEN terms (packet p. 18)</summary>

10. Starting amount $1000 at month 0: `f(0) = 1000, f(n) = f(n-1) · 1/2`;
    `f(n) = 1000(1/2)^n`
11. `f(1) = 10, f(n) = f(n-1) · 10`; `f(n) = 10^n`
12. `f(0) = 1, f(n) = f(n-1) · 2`; `f(n) = 2^n`
13. `f(1) = 1024, f(n) = f(n-1) · 1/4`; `f(n) = 1024(1/4)^(n-1)`
14. `f(1) = 3, f(n) = f(n-1) · 3`; `f(n) = 3^n`

a) `14, 10, 6, 2, −2, −6, −10, −14, −18, −22`
b) `1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683`
c) `−2, −8, −32, −128, −512, −2048, −8192, −32768, −131072, −524288`
d) `10, 12, 15, 19, 24, 30, 37, 45, 54, 64`

</details>

<details>
<summary>HW: Writing Recursive and Explicit Rules (packet p. 19)</summary>

A) `f(x) = 3x + 2`; `a(1) = 5, a(n) = a(n-1) + 3`
B) `f(x) = 5 · 2^(x-1)`; `a_1 = 5, a_n = 2 · a_(n-1)`
C) `f(x) = 4(1/2)^(x-1)`; `a(1) = 4, a(n) = a(n-1) · 1/2`
D) Fibonacci — no explicit rule at this level; `a_1 = 0, a_2 = 1, a_n = a_(n-1) + a_(n-2)`
E) `f(x) = x²`; `a(1) = 1, a(n) = a(n-1) + 2n − 1` (add the next odd number)
F) `f(x) = 12 − 2x`; `a_1 = 10, a_n = a_(n-1) − 2`
G) Factorials: `a(1) = 1, a(n) = a(n-1) · (n − 1)`; explicit is `(n − 1)!`, which you may not
   be expected to write
H) `d = 1¼`: `f(x) = 5 + 1.25(x − 1) = 1.25x + 3.75`; `a(1) = 5, a(n) = a(n-1) + 1.25`
I) `f(x) = 10^(x-1)`; `a(1) = 1, a(n) = a(n-1) · 10`

</details>

<details>
<summary>Sequences 3.10 (packet p. 20)</summary>

5. `f(1) = 14, f(n) = f(n-1) + 2`; `f(n) = 14 + 2(n − 1) = 2n + 12`. Table: rows 1–5 →
   `14, 16, 18, 20, 22`.
6. `f(n) = 8 − 2(n − 1) = 10 − 2n`
7. `f(n) = 5(n − 1) = 5n − 5`
8. `f(n) = 5/3 + (n − 1) = n + 2/3`

</details>

<details>
<summary>Kuta — Arithmetic Sequences (packet p. 21)</summary>

1. d = −3 · 2. d = −20 · 3. d = −30 · 4. d = −10 · 5. **not arithmetic** · 6. d = 5
7. `a_34 = 227` · 8. `a_39 = −3835` · 9. `a_27 = −63.8` · 10. `a_23 = 103/8`
11. `28, 38, 48, 58, 68`; `a_n = 18 + 10n`
12. `−38, −138, −238, −338, −438`; `a_n = 62 − 100n`
13. `−34, −44, −54, −64, −74`; `a_n = −24 − 10n`
14. `35, 39, 43, 47, 51`; `a_n = 31 + 4n`

</details>

<details>
<summary>Practice — Translate Between Multiple Representations (packet pp. 22–23)</summary>

1. `a(1) = 2, a(n) = a(n-1) + 2`; `a(n) = 2n`
2. `a(1) = 4, a(n) = a(n-1) · 4`; `a(n) = 4^n`
3. `a(1) = 3, a(n) = a(n-1) · 2`; `a(n) = 3 · 2^(n-1)`
4. `a(1) = 275, a(n) = a(n-1) − 25`; `a(n) = 300 − 25n`
5. `a(1) = 150, a(n) = a(n-1) · 1/2`; `a(n) = 300(1/2)^n`
6. `a(1) = 2, a(n) = a(n-1) + 2`; `a(n) = 2n`
7. `a(1) = 3, a(n) = a(n-1) + 3`; `a(n) = 3n`
8. `a(1) = 2, a(n) = a(n-1) · 2`; `a(n) = 2^n`
9. Dots `6, 12, 18` (two more columns of 3 each day): `a(1) = 6, a(n) = a(n-1) + 6`; `a(n) = 6n`
10. Dots `6, 12, 24` (columns double each day): `a(1) = 6, a(n) = a(n-1) · 2`;
    `a(n) = 6 · 2^(n-1)`

Count the dots on your own copy for 9 and 10 — the scan is small.

**Augustus:** left after day n is `100000(0.4)^n` (he keeps 40%). Day 8: `≈ 65.5`, so about 65
candies. The formula never reaches exactly zero; in practice it drops below one whole candy on
day 13.

</details>

<details>
<summary>Unit 3 Extra Practice (packet pp. 24–25)</summary>

1. arithmetic, d = −14 · 2. geometric, r = 3 · 3. neither (gaps −2, −4, −8, −16)
4. `a_12 = 76` · 5. `a_4 = 4 · 2^3 = 32`
6. `32, 45, 58` (d = 13)
7. `a_n = 19 + 8(n − 1) = 8n + 11`
8. `a_1 = 27, a_n = a_(n-1) · 4/3`
9. A) `−5, −3, 0, 4` · B) `10, 13, 16, 19`
10. `550, 500, 450, 400`. `a(1) = 550, a(n) = a(n-1) − 50`; `a(n) = 600 − 50n`. Domain: whole
    months 1 through 12. Range: `550, 500, 450, ..., 50, 0`.
11. `6, 12, 24, 48`. `a(1) = 6, a(n) = a(n-1) · 2`; `a(n) = 6 · 2^(n-1)`. Domain: the days
    `1, 2, 3, ...`. Range: `6, 12, 24, 48, ...`.
12. Arithmetic adds the same amount each step (Laura: −$50 a month, a straight-line graph).
    Geometric multiplies by the same amount each step (the dots: ×2 a day, a curved graph).

</details>

<details>
<summary>Arithmetic and Geometric Sequence Practice (packet p. 26)</summary>

1. arithmetic: `a_1 = 35, a_n = a_(n-1) − 3`; `a_n = 38 − 3n`
2. geometric: `a_1 = −1, a_n = 5 · a_(n-1)`; `a_n = −1 · 5^(n-1)`
3. arithmetic: `a_1 = 29, a_n = a_(n-1) − 9`; `a_n = 38 − 9n`
4. arithmetic: `a_1 = −3, a_n = a_(n-1) − 20`; `a_n = 17 − 20n`
5. geometric: `a_1 = 1, a_n = −4 · a_(n-1)`; `a_n = (−4)^(n-1)`
6. geometric: `a_1 = 2, a_n = −2 · a_(n-1)`; `a_n = 2(−2)^(n-1)`
7. `26, 23, 20, 17` (5 jumps, d = −3): `a_1 = 29, a_n = a_(n-1) − 3`; `a_n = 32 − 3n`
8. `2, 12, 22, 32, 42` (6 jumps, d = 10): `a_1 = −8, a_n = a_(n-1) + 10`; `a_n = 10n − 18`
9. `−27, 173, 373, 573, 773`
10. `−2, −10, −50, −250, −1250`
11. `−15, −5, 5, 15, 25`
12. `−2, −4, −8, −16, −32`

The rest of this page is cut off in the scan.

</details>

## 9. Self-check before the test

You're ready when you can do each of these without looking:

- [ ] Tell arithmetic / geometric / neither and give `d` or `r`, including negatives and fractions
- [ ] Write a recursive formula with **both** lines
- [ ] Explain why the explicit formula has `n − 1`
- [ ] Turn a recursive formula into an explicit one and back
- [ ] Fill in missing terms by counting jumps
- [ ] Say what `n = 1` means in a story before writing the formula
- [ ] Turn "loses 10%" into `× 0.9`
- [ ] Match arithmetic ↔ linear and geometric ↔ exponential from a table or graph
- [ ] State a domain and range for a sequence in context
