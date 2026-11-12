# Unit 1: Sequences — Packet Study Guide

[Take the packet-aligned quiz →](quizzes/unit-1-sequences-packet.html) · [General notes on sequences and series →](sequences-and-series.md)

> This guide follows the actual **Unit 1 "Sequences" class packet** (the scanned PDF in this repo,
> `scan_20260819030552.pdf`, packet pages 1–26). It is organized by *skill*, in the order the packet
> teaches them. Each skill has the idea, a worked model taken from the packet, the usual mistake, and a
> short "Try it" set with **new numbers** (answers at the bottom) so the packet itself is still yours to do.
>
> What the packet does **not** cover: series, sigma notation, and sums. Those are in the
> [general notes](sequences-and-series.md) but are not in this unit's handouts.

## The whole unit in one picture

| | Arithmetic | Geometric |
|---|---|---|
| What stays constant | **common difference** `d` (you add it) | **common ratio** `r` (you multiply by it) |
| How to find it | subtract: `next − previous` | divide: `next ÷ previous` |
| Recursive formula | `a(1) = first`, `a(n) = a(n−1) + d` | `a(1) = first`, `a(n) = a(n−1) · r` |
| Explicit formula | `a(n) = a(1) + d(n − 1)` | `a(n) = a(1) · r^(n−1)` |
| Graph | points on a straight **line** | points on an **exponential curve** |
| Function family | linear | exponential |
| Word-problem clues | "each week adds $150", "2 more seats per row" | "doubles", "half of what's left", "85% of", "depreciates 10%" |

Every worksheet in the packet is some version of: *decide which column you are in, find `a(1)` and `d` or `r`, then write or use a formula.*

## Skill 1 — Arithmetic, geometric, or neither (packet pp. 1–4, 24)

**Test:** subtract consecutive terms. Same number every time → arithmetic. If not, divide consecutive terms. Same number every time → geometric. If neither works → neither.

Worked models:

- `52.2, 55.7, 59.2, 62.7, …` → differences are all `3.5` → **arithmetic, d = 3.5**
- `0.2, 1, 5, 25, …` → ratios are all `5` → **geometric, r = 5**
- `4, −20, 100, −500, …` → ratios are all `−5` → **geometric, r = −5** (signs alternate when `r` is negative); next two terms `2500, −12500`
- `64, 48, 36, 27, …` → ratios are all `3/4` → **geometric, r = 3/4**; next two terms `20.25, 15.1875`
- `3, 5, 8, 12, …` → differences `2, 3, 4` (not constant), ratios not constant → **neither**. It is still predictable (add one more each time): `17, 23`
- `1, 11, 111, 1111, …` → **neither**. Rule: multiply by 10 and add 1.

**Common mistakes**

- Calling a decreasing sequence "geometric" just because it shrinks. `10, 8, 6, 4` shrinks by *subtracting* 2 → arithmetic with `d = −2`.
- Writing `r = 2` for `100, 50, 25`. You multiply by `1/2`, so `r = 1/2`. Always compute `next ÷ previous`, in that order.
- Stopping after checking only the first pair. Check at least three pairs.

**Graphs (packet p. 3):** plot (term number, term value). Arithmetic sequences make dots in a straight line (slope = `d`). Geometric sequences make dots that curve — up faster and faster when `r > 1`, flattening toward 0 when `0 < r < 1`. The dots are **not connected**, because there is no "term 1.5."

## Skill 2 — Notation (packet p. 6)

| Symbols | Meaning |
|---|---|
| `a(1)` or `a₁` | the 1st term |
| `a(n)` or `aₙ` | the nth term (the one you are finding) |
| `a(n−1)` or `aₙ₋₁` | the term **right before** `a(n)` |

`a(n−1)` does **not** mean "the term minus 1." It means "go back one position." The packet also uses `f(n)`, `g(n)`, `b(n)` — same idea, different letter.

## Skill 3 — Recursive formulas (packet pp. 5–13)

**Recursion** = define the next term using the term(s) before it. A recursive formula always needs **two parts**:

1. where the sequence starts: `a(1) = …`
2. the rule to get from one term to the next: `a(n) = a(n−1) …`

The packet's matching activity (p. 8) makes the point: `aₙ = aₙ₋₁ + 3` describes `2, 5, 8, 11, …` *and* `21, 24, 27, 30, …`. Without the first term the rule does not pin down one sequence.

**Worked models**

- Dot pattern 1 (p. 5), the growing cross: 13, 17, 21, 25 dots. Each figure adds 4 dots (one on each arm). → `a(1) = 13`, `a(n) = a(n−1) + 4`
- Dot pattern 2 (p. 6): 3, 6, 12, 24, 48 dots. Each figure doubles. → `a(1) = 3`, `a(n) = a(n−1) · 2`
- Expanding a recursive formula (p. 7): `c(1) = 2`, `c(n) = 2 · c(n−1) − 1` → `2, 3, 5, 9, 17, 33, …` Do the operations in order: double first, then subtract 1. (This one is *neither* arithmetic nor geometric.)
- A rule that uses `n` itself (pp. 12, 18): `a₁ = −4`, `aₙ = aₙ₋₁ + n` → `a₂ = −4 + 2 = −2`, `a₃ = −2 + 3 = 1`, `a₄ = 1 + 4 = 5`. The amount you add **changes each step** because it is the position number.
- From two consecutive terms (p. 11): if `f(3) = 5` and `f(4) = 8`, then `d = 8 − 5 = 3`, so `f(5) = 11`, `f(6) = 14`, and the rule is `f(n) = f(n−1) + 3`. To state the start, walk backward: `f(2) = 2`, `f(1) = −1`.

**Matching a sequence to a recursive rule (p. 8):** test the rule on the first two or three jumps. Example: does `aₙ = 4aₙ₋₁ − 5` fit `2, 3, 7, 23, 87`? `4·2 − 5 = 3` ✓, `4·3 − 5 = 7` ✓, `4·7 − 5 = 23` ✓ → yes.

**Common mistakes**

- Leaving off `a(1)`. A recursive formula without a starting term is incomplete.
- Mixing up `+ d` and `· r`: `a(n) = a(n−1) + 2` gives `10, 12, 14`; `a(n) = a(n−1) · 2` gives `10, 20, 40`.
- "Find the 10th term" from a recursive formula (p. 12): you really do have to step up to it (or convert to explicit, Skill 4). Do not plug 10 in for `a(n−1)`.

## Skill 4 — Building explicit formulas (packet pp. 14–15, 19–21)

A recursive formula is fine for the 8th term and painful for the 54th. An **explicit formula** jumps straight to any term.

**The packet's "expand" idea (p. 14)**, using `a(1) = 13`, `a(n) = a(n−1) + 4`:

| Fig # | Dots | Expand |
|---|---|---|
| 1 | 13 | `13` |
| 2 | 17 | `13 + 4` |
| 3 | 21 | `13 + 4 + 4` = `13 + 4(2)` |
| 4 | 25 | `13 + 4(3)` |
| 10 | 49 | `13 + 4(9)` |
| 100 | 409 | `13 + 4(99)` |
| n | | `13 + 4(n − 1)` |

The number of 4's is always **one less than the figure number**, because figure 1 has none yet. That is where `(n − 1)` comes from:

```
arithmetic:  a(n) = a(1) + d(n − 1)
```

Same idea for multiplying (p. 15), using `g(1) = 3`, `g(n) = g(n−1) · 2`:

| Fig # | Dots | Expand |
|---|---|---|
| 1 | 3 | `3` |
| 2 | 6 | `3 · 2` |
| 3 | 12 | `3 · 2 · 2` = `3 · 2²` |
| 4 | 24 | `3 · 2³` |
| 10 | 1536 | `3 · 2⁹` |
| n | | `3 · 2^(n−1)` |

```
geometric:  a(n) = a(1) · r^(n−1)
```

**Simplifying the arithmetic one.** `13 + 4(n − 1) = 13 + 4n − 4 = 4n + 9`. Both forms are correct. The simplified form `4n + 9` is a line with slope `d = 4`; the `+9` is the "zeroth term" (`a(1) − d`).

**Recursive → explicit (p. 20):** `f(n) = f(n−1) − 2; f(1) = 8` → `d = −2`, `a(1) = 8` → `f(n) = 8 − 2(n − 1) = 10 − 2n`. Check: `f(1) = 8` ✓, `f(2) = 6` ✓.

**Explicit → a specific term (p. 21):** just plug in. `aₙ = −11 + 7n`, find `a₃₄`: `−11 + 7(34) = 227`.

**First term and `d` → explicit (p. 21):** `a₁ = 28, d = 10` → `aₙ = 28 + 10(n − 1) = 18 + 10n`.

**Sequences with no simple explicit or recursive pattern of the usual kind (p. 19)**

- `1, 4, 9, 16, 25, …` → explicit is easy: `f(x) = x²`. Recursive is awkward (the amount added grows: +3, +5, +7 …).
- `0, 1, 1, 2, 3, 5, 8, …` (Fibonacci) → recursive needs **two** starting terms: `a₁ = 0, a₂ = 1, aₙ = aₙ₋₁ + aₙ₋₂`. This is the one the worksheet means by "not possible to write an explicit rule" at this level.
- `1, 1, 2, 6, 24, 120, …` → each term is the previous times the next counting number (factorials): `a(1) = 1`, `a(n) = a(n−1) · (n − 1)`.

**Common mistakes**

- Using `n` instead of `n − 1`: `13 + 4n` gives 17 for figure 1, which is wrong. Always check your formula with `n = 1`.
- For geometric: writing `(3 · 2)^(n−1)` or `6^(n−1)`. Only `r` is raised to the power: `3 · 2^(n−1)`.
- Negative ratios need parentheses: `1, −4, 16, −64` is `(−4)^(n−1)`, not `−4^(n−1)`.

## Skill 5 — Missing terms: arithmetic and geometric means (packet pp. 11, 12, 17, 24, 26)

**Arithmetic.** Count the **jumps** between the two known terms (not the blanks), then `d = (last − first) ÷ jumps`.

- `8, __, __, 47, 60` → 47 to 60 is one jump, so `d = 13` → `8, 21, 34, 47, 60`
- `19, __, __, __, 71` → 4 jumps: `d = (71 − 19)/4 = 13` → `32, 45, 58`
- `29, __, __, __, __, 14` → 5 jumps: `d = (14 − 29)/5 = −3` → `26, 23, 20, 17`
- `0, __, __, 2, 8/3` → last jump is `8/3 − 2 = 2/3` → `2/3, 4/3`

**Geometric (p. 17).** Same counting, but `r^(jumps) = last ÷ first`.

- `x: 1…5`, `y: 2, __, __, __, 162` → 4 jumps: `r⁴ = 162/2 = 81` → `r = 3` → `6, 18, 54`. (`r = −3` also works: `−6, 18, −54`. An even number of jumps always allows both signs.)
- `1/9, __, __, −3, __` → 3 jumps: `r³ = −3 ÷ (1/9) = −27` → `r = −3` → `−1/3, 1, −3, 9`. An odd number of jumps gives only one answer.
- `10, __, __, __, 0.625` → `r⁴ = 0.0625` → `r = 0.5` → `5, 2.5, 1.25`

**Common mistake:** dividing by the number of blanks instead of the number of jumps. Three blanks between two known terms = **four** jumps.

## Skill 6 — Word problems (packet pp. 9–10, 13, 16, 18, 22–23, 25)

The page-16 worksheet spells out the routine, and it works for all of them:

1. **Arithmetic or geometric? How do you know?** (adds the same amount vs. multiplies by the same factor)
2. **Write the explicit formula** and say where each number came from.
3. **Identify `n`** and say where it came from. Then plug in.
4. **Answer in a sentence** with units.

**Percent language → ratio**

| Words | `r` |
|---|---|
| "rebounds to 85% of its previous height" | `0.85` |
| "depreciates 10% each year" (loses 10%, keeps 90%) | `0.90` |
| "gives away 60% each day" (keeps 40%) | `0.40` |
| "takes out half of what's left" | `0.5` |
| "doubles" / "sends it to four friends each" | `2` / `4` |

The trap: "gives away 60%" does **not** mean `r = 0.6`. `r` is what is **left**.

**Worked model — arithmetic (Sally, p. 9).** $225 after paycheck 1, $1275 after paycheck 8, same pay each week.

- Week 1 to week 8 is **7** jumps: `d = (1275 − 225)/7 = 150`. She is paid $150 a week.
- Table: `225, 375, 525, 675, 825, 975, 1125, 1275`
- Recursive: `a(1) = 225`, `a(n) = a(n−1) + 150` — "this week's balance is last week's balance plus $150."
- Before she started working (one step back from week 1): `225 − 150 = $75`.
- Function family: **linear** (constant amount added; graph is a line).

**Worked model — geometric (Johnny's car, p. 10).** Worth $17,000 after year 1, loses 10% a year.

- `r = 0.9`. Recursive: `a(1) = 17000`, `a(n) = a(n−1) · 0.9` — "each year the car is worth 90% of last year's value."
- Table: `17000, 15300, 13770, 12393, 11153.70, 10038.33, 9034.50, 8131.05`
- After 8 years: `17000 · 0.9⁷ ≈ $8,131.05`
- Original price (one step back): `17000 ÷ 0.9 ≈ $18,888.89`. Going backward in a geometric sequence means **dividing** by `r`.
- Function family: **exponential** (constant percent change; graph curves).

**Watch what `n = 1` means.** This is the most common place to lose points.

- *Tennis ball (p. 16):* dropped from 15 ft, rebounds to 85%. If `a(1) = 15` is the drop height, then the height after the 1st bounce is `a(2)`, and after the **third bounce** is `a(4) = 15 · 0.85³ ≈ 9.2 ft`. Using `n = 3` gives the height after only two bounces.
- *Viola's baskets (p. 16):* 13 left over, 12 more per day, 15 days. The 13 is the amount **before** day 1, so after day 1 she has 25. Either write `a(n) = 25 + 12(n − 1)` and use `n = 15`, or think "start + 15 jumps": `13 + 12(15) = 193` baskets.
- *Joey's quizzes (p. 16):* 57, 61, 65 are quizzes 1, 2, 3, so `a(1) = 57` with no adjustment: `a(9) = 57 + 4(8) = 89`.

**Starting at 0 (pp. 18, 22, 25).** When the table or story starts at "0 folds" or "she has $300 now," it is usually cleaner to let the start be term 0. Then there is no `−1` in the formula:

- Paper folds: `0 → 1, 1 → 2, 2 → 4, 3 → 8` → `f(n) = 2ⁿ`
- $300, take out $25 a month → after `n` months: `300 − 25n`
- $300, take out half each month → after `n` months: `300 · (1/2)ⁿ`
- $1000 in a jar, withdraw half of what remains each month → `1000 · (1/2)ⁿ`

State what your `n` counts. `300 − 25n` (n = months passed) and `275 − 25(n − 1)` (n = month number) are the same sequence.

**"When will it be gone?" (Augustus's candy, p. 23).** `100000 · 0.4ⁿ` never actually equals 0 — a geometric sequence with `0 < r < 1` gets closer and closer to 0 forever. Day 8 leaves about `100000 · 0.4⁸ ≈ 66` candies. In real life the pile is gone once less than one candy is left, which happens around day 13. Compare with Claire's `300 − 25n`, an arithmetic sequence, which hits exactly 0 at month 12.

**Domain and range (p. 25).** Domain = the term numbers that make sense; range = the values the sequence takes.

- Laura: $600, takes out $50 a month → `600 − 50n`. Domain: `n = 1, 2, …, 12` (whole months until the money runs out). Range: `550, 500, …, 50, 0`.
- Dot pattern `6, 12, 24, 48, …` → `6 · 2^(n−1)`. Domain: `n = 1, 2, 3, …` Range: `6, 12, 24, 48, …`
- Both are lists of separate values, not intervals.

## Skill 7 — Translating between representations (packet pp. 13, 20, 22–23, 25)

The same sequence can show up as a list, a table, a dot picture, a story, a graph, a recursive rule, or an explicit rule. Get it into a **list of the first 3–4 terms** first; then it is Skill 1 and Skill 4.

| Given | First terms | Type | Recursive | Explicit |
|---|---|---|---|---|
| Table: days 1–4 → cells 3, 6, 12, 24 | 3, 6, 12, 24 | geometric, `r = 2` | `a(1) = 3, a(n) = 2·a(n−1)` | `3 · 2^(n−1)` |
| Table: days 1–4 → cells 3, 6, 9, 12 | 3, 6, 9, 12 | arithmetic, `d = 3` | `a(1) = 3, a(n) = a(n−1) + 3` | `3n` |
| Table: days 1–4 → cells 5, 8, 12.8, 20.48 | 5, 8, 12.8, 20.48 | geometric, `r = 1.6` | `a(1) = 5, a(n) = 1.6·a(n−1)` | `5 · 1.6^(n−1)` |
| Dots: 3 rows × 2, 4, 6 columns | 6, 12, 18 | arithmetic, `d = 6` | `a(1) = 6, a(n) = a(n−1) + 6` | `6n` |
| Dots: 3 rows × 2, 4, 8 columns | 6, 12, 24 | geometric, `r = 2` | `a(1) = 6, a(n) = 2·a(n−1)` | `6 · 2^(n−1)` |
| Theater: row 1 has 14 seats, each row 2 more | 14, 16, 18 | arithmetic, `d = 2` | `f(1) = 14, f(n) = f(n−1) + 2` | `14 + 2(n−1) = 2n + 12` |
| Chain letter: 4 friends, each sends to 4 | 4, 16, 64 | geometric, `r = 4` | `a(1) = 4, a(n) = 4·a(n−1)` | `4ⁿ` |

Notice the two dot pictures: they share the first two terms (6, 12). **Two terms are never enough** to tell arithmetic from geometric — look at the third.

When graphing: label the horizontal axis with what `n` counts (days, months, figure number) and the vertical axis with the quantity. Plot separate points.

## Test-day checklist

- [ ] Subtract first, then divide, to classify. Check three pairs.
- [ ] Recursive formula has **both** `a(1) = …` and the rule.
- [ ] Explicit formula uses `(n − 1)`, unless you deliberately started at `n = 0`.
- [ ] Test every formula with `n = 1` and `n = 2` before using it.
- [ ] Percent problems: `r` is what **remains**, not what is lost.
- [ ] Missing terms: count jumps, not blanks.
- [ ] Negative ratio → parentheses around it.
- [ ] Word problems: answer in a sentence with units.
- [ ] Be able to explain the difference between arithmetic and geometric with an example of each (packet p. 25, #12).

## Try it (new numbers)

**A. Classify; give `d` or `r`; give the next two terms.**

1. `81, 54, 36, 24, …`
2. `−7, −2.5, 2, 6.5, …`
3. `2, 6, 12, 20, …`
4. `−3, 6, −12, 24, …`

**B. Recursive formulas.**

5. Write the first five terms: `a(1) = 6`, `a(n) = 3 · a(n−1) − 4`
6. Write the first five terms: `a₁ = 2`, `aₙ = aₙ₋₁ + n`
7. `f(4) = 30` and `f(5) = 23` are consecutive terms of an arithmetic sequence. Find `f(6)`, `f(7)`, and the recursive rule with `f(1)`.
8. Write a recursive formula for `48, 12, 3, 3/4, …`

**C. Explicit formulas.**

9. Write the explicit formula for `11, 18, 25, 32, …` and find the 40th term.
10. Write the explicit formula for `5, −10, 20, −40, …` and find the 9th term.
11. `g(n) = g(n−1) + 6; g(1) = −9`. Write the explicit formula.
12. `aₙ = 72 − 5n`. Find `a₂₀`.

**D. Missing terms.**

13. Arithmetic: `−4, __, __, __, __, 31`
14. Geometric: `x: 1, 2, 3, 4` → `y: 5, __, __, 320`
15. Geometric: `x: 1, 2, 3, 4, 5` → `y: 3, __, __, __, 48`

**E. Word problems.** Use the four-step routine.

16. A plant is 9 cm tall when you buy it and grows 2.5 cm each week. How tall is it after 12 weeks?
17. A phone is worth $800 after its first year and loses 25% of its value each year after. What is it worth in year 5?
18. A ball is dropped from 20 ft and rebounds to 70% of its previous height. How high does it rebound after the 4th bounce?
19. Maya has $450 in an account and takes out $30 at the end of each month. Write an explicit rule for the amount after `n` months, and give the domain and range.
20. A rumor starts with 3 people on day 1, and the number of people who know it triples each day. Write recursive and explicit rules. How many know it on day 7?

<details>
<summary>Answers</summary>

1. Geometric, `r = 2/3`; next: `16, 32/3`
2. Arithmetic, `d = 4.5`; next: `11, 15.5`
3. Neither (differences are 4, 6, 8); next: `30, 42`
4. Geometric, `r = −2`; next: `−48, 96`
5. `6, 14, 38, 110, 326`
6. `2, 4, 7, 11, 16`
7. `d = −7`; `f(6) = 16`, `f(7) = 9`; `f(1) = 51`, `f(n) = f(n−1) − 7`
8. `a(1) = 48`, `a(n) = a(n−1) · (1/4)`
9. `a(n) = 11 + 7(n − 1) = 7n + 4`; `a(40) = 284`
10. `a(n) = 5 · (−2)^(n−1)`; `a(9) = 5 · (−2)⁸ = 1280`
11. `g(n) = −9 + 6(n − 1) = 6n − 15`
12. `a₂₀ = 72 − 100 = −28`
13. 5 jumps, `d = 35/5 = 7`: `3, 10, 17, 24`
14. 3 jumps, `r³ = 64`, `r = 4`: `20, 80`
15. 4 jumps, `r⁴ = 16`, `r = 2`: `6, 12, 24` (or `r = −2`: `−6, 12, −24`)
16. Arithmetic. 9 cm is the height before any weeks pass, so after 12 weeks: `9 + 2.5(12) = 39 cm`. (With `a(1) = 11.5`: `11.5 + 2.5(11) = 39`.)
17. Geometric, `r = 0.75`, `a(1) = 800`: `a(5) = 800 · 0.75⁴ = $253.13`
18. Geometric, `r = 0.7`. With `a(1) = 20` as the drop, the 4th bounce is `a(5) = 20 · 0.7⁴ ≈ 4.8 ft`
19. `a(n) = 450 − 30n`. Domain: `n = 1, 2, …, 15`. Range: `420, 390, …, 30, 0`
20. `a(1) = 3`, `a(n) = 3 · a(n−1)`; `a(n) = 3 · 3^(n−1) = 3ⁿ`; day 7: `3⁷ = 2187` people

</details>

## Where each skill is in the packet

| Packet page | Handout | Skill |
|---|---|---|
| 1–3 | Sorting Sequences (Parts A–C) | 1 |
| 4 | Ready, Set, Go! — recognizing arithmetic and geometric | 1 |
| 5–6 | Recursive Formulas from Patterns | 2, 3 |
| 7 | HW: Expanding sequences from recursive formulas | 3 |
| 8 | Matching Activity Lesson Opener | 3 |
| 9–10 | Recursive Formulas from Word Problems | 3, 6 |
| 11 | Recursive Review (Sequences 3.5) | 3, 5 |
| 12–13 | Getting Precise w/ Recursive Formulas | 3, 5, 7 |
| 14–15 | Building Explicit Formulas | 4 |
| 16 | Arithmetic and Geometric Sequence Word Problems Practice | 6 |
| 17 | Geometric means (4.4) | 5 |
| 18 | Recursive and explicit equations of geometric sequences | 3, 4, 6 |
| 19 | HW: Writing Recursive and Explicit Rules for Sorting Sequences | 3, 4 |
| 20 | Sequences 3.10 — create a context; writing explicit equations | 4, 7 |
| 21 | Kuta: Arithmetic Sequences | 1, 4 |
| 22–23 | Practice: Translate Between Multiple Representations | 6, 7 |
| 24–25 | Unit 3 Extra Practice | all |
| 26 | Arithmetic and Geometric Sequence Practice | 1, 3, 4, 5 |

The scanned PDF in this repo is cut off partway through the page after 26 (the upload was incomplete), so anything after that page is not reflected here.
