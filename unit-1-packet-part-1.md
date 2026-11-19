# Unit 1 Packet, Part 1 — Spotting Sequences and Recursive Formulas

Matched to the teacher's **Unit 1: Sequences** packet (the scan in this repo), pages 1–13.
One idea per step. Try the practice problem before opening the answer.

[Part 2: explicit formulas, word problems, missing terms →](unit-1-packet-part-2.md)

> No teacher answer key was in the scan, so these answers are worked out by hand, not
> copied from a key. If one disagrees with what was marked in class, go with the teacher.

---

## Step 1 — Arithmetic or geometric?

- **Arithmetic**: you **add** the same number each time. That number is the *common difference*.
- **Geometric**: you **multiply** by the same number each time. That number is the *common ratio*.

**Worked (packet p. 2, #4c):** `2, 7, 12, 17, ...`
7 − 2 = 5, 12 − 7 = 5, 17 − 12 = 5. Same amount added → **arithmetic, common difference 5**.

**Practice (p. 2, #4d):** `100, 50, 25, 12.5, ...`

<details><summary>Answer</summary>

**Geometric, common ratio 1/2.** (50 ÷ 100 = 0.5, 25 ÷ 50 = 0.5.)

*If you missed it:* subtract first. If the differences aren't all the same (−50, −25, −12.5),
switch to dividing. **A**dd → **A**rithmetic. Multiply → geometric.
</details>

---

## Step 2 — Reading the notation

From packet p. 6:

| Symbol | Means |
|---|---|
| `a(1)` or `a_1` | the 1st term |
| `a(n)` or `a_n` | the n-th term (the one you're on) |
| `a(n−1)` or `a_(n−1)` | the term **just before** it |

**Worked:** in `5, 8, 11, 14`, if n = 3 then `a(n)` = 11 and `a(n−1)` = 8.

**Practice:** in `5, 8, 11, 14`, if n = 4, what are `a(n)` and `a(n−1)`?

<details><summary>Answer</summary>

`a(4)` = **14**, `a(3)` = **11**.

*If you missed it:* `n − 1` is not "subtract 1 from the number." It means "go back one spot in the list."
</details>

---

## Step 3 — Expanding a recursive formula

A recursive formula has **two parts**: where to start, and how to get the next term.

**Worked (p. 7, a):** `a(1) = 10`, `a(n) = a(n−1) + 2`
Start at 10, keep adding 2: `10, 12, 14, 16, 18, 20, 22, 24, 26, 28`.

**Practice (p. 7, b):** `b(1) = 10`, `b(n) = b(n−1) · 2`. Write the first five terms.

<details><summary>Answer</summary>

`10, 20, 40, 80, 160`

*If you missed it:* read the rule out loud — "the new term is the previous term **times 2**."
The dot means multiply, so this one doubles.
</details>

---

## Step 4 — Writing a recursive formula

1. Write the first term.
2. Find what happens each step (add? multiply?).
3. Write `a(n) = a(n−1)` followed by that step.

**Worked (p. 19, A):** `5, 8, 11, 14, 17, ...`
First term 5, add 3 each time → `a(1) = 5`, `a(n) = a(n−1) + 3`.

**Practice (p. 19, B):** `5, 10, 20, 40, 80, ...`

<details><summary>Answer</summary>

`a(1) = 5`, `a(n) = a(n−1) · 2`

*If you missed it:* both parts are required. The packet's Matching page (p. 8) says why:
`a(n) = a(n−1) + 3` alone describes `2, 5, 8, ...` **and** `21, 24, 27, ...`. Only the first
term tells you which one.
</details>

---

## Step 5 — Sequences that are neither

Some sequences on p. 19 are not arithmetic or geometric:

- `1, 4, 9, 16, 25` — perfect squares (differences are 3, 5, 7, 9 — not constant).
- `0, 1, 1, 2, 3, 5, 8` — each term is the sum of the two before it.
- `1, 1, 2, 6, 24, 120` — multiply by 1, then 2, then 3, then 4...

**Worked:** `1, 4, 9, 16, 25` → explicit `f(x) = x²`.

**Practice:** write a recursive rule for `0, 1, 1, 2, 3, 5, 8, ...`

<details><summary>Answer</summary>

`a(1) = 0`, `a(2) = 1`, `a(n) = a(n−1) + a(n−2)`

*If you missed it:* when one step back isn't enough, look **two** steps back. That's why this
one needs two starting terms.
</details>
