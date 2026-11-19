# Unit 1 Packet, Part 2 — Explicit Formulas, Word Problems, Missing Terms

Matched to the teacher's **Unit 1: Sequences** packet (the scan in this repo), pages 9–26.

[← Part 1: spotting sequences and recursive formulas](unit-1-packet-part-1.md)

> No teacher answer key was in the scan, so these answers are worked out by hand, not
> copied from a key. If one disagrees with what was marked in class, go with the teacher.

---

## Step 6 — Explicit formula, arithmetic

Recursive is slow for far-away terms. An explicit formula jumps straight there.

`a(n) = a(1) + d(n − 1)` — start, plus the difference **n − 1** times.

**Worked (p. 14):** `a(1) = 13`, `a(n) = a(n−1) + 4`. How many dots in figure 10?
Figure 10 is 9 steps after figure 1: `13 + 4(9) = 49`.
Explicit formula: `a(n) = 13 + 4(n − 1)`.

**Practice (p. 14, #5):** how many dots in figure 25?

<details><summary>Answer</summary>

`13 + 4(24) = 109`

*If you missed it:* count the jumps, not the terms. Term 1 needs 0 jumps, term 2 needs 1,
so term n needs **n − 1**.
</details>

---

## Step 7 — Explicit formula, geometric

`a(n) = a(1) · r^(n − 1)` — start, times the ratio **n − 1** times.

**Worked (p. 15):** `g(1) = 3`, `g(n) = g(n−1) · 2`
Terms: `3, 6, 12, 24, 48, 96`. Explicit: `g(n) = 3 · 2^(n − 1)`.
Check: `g(6) = 3 · 2⁵ = 3 · 32 = 96` ✓

**Practice:** find `g(10)`.

<details><summary>Answer</summary>

`3 · 2⁹ = 3 · 512 = 1536`

*If you missed it:* do the exponent **before** multiplying by 3. `3 · 2⁹` is not `6⁹`.
</details>

---

## Step 8 — Word problems

The packet (p. 16) wants four things every time:
**a)** arithmetic or geometric? **b)** explicit formula **c)** what is n? **d)** answer in a sentence.

**Worked (p. 16, #1):** Joey scores 57, then 61, then 65. What is his 9th quiz score?
a) Arithmetic — he gains 4 each time.
b) `a(n) = 57 + 4(n − 1)`
c) n = 9
d) `57 + 4(8) = 89`. Joey will score 89 on his 9th quiz.

**Practice (p. 16, #3):** Viola has 13 baskets left over and makes 12 more each day.
How many will she have after 15 work days?

<details><summary>Answer</summary>

**193 baskets.** Arithmetic, d = 12. After day 1 she has 25, so `a(n) = 25 + 12(n − 1)`
and `a(15) = 25 + 12(14) = 193`. (Same thing as `13 + 12 · 15`.)

*If you missed it:* decide what "term 1" is before writing anything. Here 13 is the amount
**before** day 1, so it is not `a(1)`. Getting 181 means the start was off by one day.
</details>

**One more to watch (p. 16, #2):** a ball dropped from 15 ft rebounds to 85% each bounce.
Height after the 3rd bounce = `15 · 0.85³ ≈ 9.2 ft`. The 15 ft is the drop, not bounce 1 —
the same off-by-one trap.

---

## Step 9 — Working backward from two facts

**Worked (p. 9, Sally):** $225 after paycheck 1, $1275 after paycheck 8.
Paycheck 1 to paycheck 8 is 7 jumps: `(1275 − 225) ÷ 7 = 150` per week.
Before her first paycheck she had `225 − 150 = $75`.
Recursive: `a(1) = 225`, `a(n) = a(n−1) + 150`.

**Practice (p. 10, Johnny):** his car is worth $17,000 after 1 year and loses 10% a year.
What did he pay for it originally?

<details><summary>Answer</summary>

Losing 10% means multiplying by 0.9. Go backward by dividing: `17000 ÷ 0.9 ≈ $18,888.89`.
Recursive: `a(1) = 17000`, `a(n) = a(n−1) · 0.9`.

*If you missed it:* "decreases 10%" keeps 90%, so r = 0.9, not 0.1. And to go **back** a step
in a geometric sequence you divide by r; in an arithmetic one you subtract d.
</details>

---

## Step 10 — Filling in missing terms

Count the jumps between the two terms you know.

**Worked, arithmetic (p. 24, #6):** `19, __, __, __, 71`
4 jumps: `(71 − 19) ÷ 4 = 13`. Terms: `19, 32, 45, 58, 71`.

**Worked, geometric (p. 17, #12):** `2, __, __, __, 162`
4 jumps: `r⁴ = 162 ÷ 2 = 81`, so r = 3. Terms: `2, 6, 18, 54, 162`.

**Practice (p. 17, #14):** `10, __, __, __, 0.625`

<details><summary>Answer</summary>

`r⁴ = 0.625 ÷ 10 = 0.0625`, so r = 1/2. Terms: `10, 5, 2.5, 1.25, 0.625`.

*If you missed it:* 5 terms means **4** jumps, not 5. Arithmetic: divide the gap by the
jumps. Geometric: take that root of the ratio.
</details>

---

## Step 11 — Table, graph, domain and range

The last pages (22–25) ask for the same sequence as a formula, a table and a graph.

- Arithmetic graphs are dots on a **straight line** (linear).
- Geometric graphs are dots on a **curve** (exponential).
- Plot **dots only** — there is no term 1.5, so don't connect them.
- **Domain** = the term numbers (1, 2, 3, ...). **Range** = the values the sequence takes.

**Worked (p. 22, #1):** `2, 4, 6, 8, ...`
Recursive `a(1) = 2`, `a(n) = a(n−1) + 2`. Explicit `a(n) = 2n`. Dots on a line.

**Practice (p. 22, #8):** `2, 4, 8, 16, ...` — recursive, explicit, and line or curve?

<details><summary>Answer</summary>

Recursive `a(1) = 2`, `a(n) = a(n−1) · 2`. Explicit `a(n) = 2 · 2^(n − 1)` (same as `2ⁿ`). **Curve.**

*If you missed it:* the first two terms (2, 4) are the same in both sequences. Always check a
third term before deciding.
</details>
