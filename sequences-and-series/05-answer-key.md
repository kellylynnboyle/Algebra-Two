# Answer Key

## 01 — Sequences

1. `7, 11, 15, 19, ...` → `a1 = 7`, `d = 4`, `a_n = 4n + 3`
2. `100, 50, 25, 12.5, ...` → `a1 = 100`, `r = 1/2`, `a_n = 100 · (1/2)^(n-1)`
3. `a1 = -5, d = 4` → `a_15 = -5 + 14(4) = 51`
4. `a1 = 2, r = -3` → `a_6 = 2 · (-3)^5 = -486`
5. Neither — differences are `3, 5, 7, 9` (not constant, so not arithmetic)
   and ratios `2.5, 2, 1.7, ...` (not constant, so not geometric). The
   *second* differences are constant (`2, 2, 2`), which signals a quadratic
   pattern: `a_n = n^2 + 1`.

## 02 — Series and Sigma Notation

1. `Σ_{k=1}^{4} (3k-2) = 1 + 4 + 7 + 10 = 22`
2. `Σ_{k=3}^{6} k^2 = 9 + 16 + 25 + 36 = 86`
3. `5 + 10 + ... + 50 = Σ_{k=1}^{10} 5k`
4. `1 + 4 + 9 + 16 + 25 = Σ_{k=1}^{5} k^2`
5. `Σ_{k=1}^{10} 7 = 7 · 10 = 70`

## 03 — Arithmetic Series

1. `a1 = 3, d = 5` → `a_15 = 73`, `S_15 = 15/2 (3 + 73) = 570`
2. `a1 = -10, d = 3, n = 30` → `a_30 = 77`, `S_30 = 15(-10 + 77) = 1005`
3. `Σ_{k=1}^{25} (4k-3)`: `a1 = 1, a_25 = 97` → `S_25 = 12.5(1+97) = 1225`
4. `a1 = 6, a_12 = 61` → `S_12 = 6(6 + 61) = 402`
5. `a1 = 2, d = 3`. Solve `n/2 (3n+1) = 345` → `3n^2 + n - 690 = 0` →
   `n = 15` (using the quadratic formula; discriminant `8281 = 91^2`)

## 04 — Geometric Series

1. `a1 = 2, r = 3, n = 10` → `S_10 = 2(1-3^10)/(1-3) = 59048`
2. `Σ_{k=1}^{5} 100(0.1)^(k-1) = 100+10+1+0.1+0.01 = 111.11`
3. `a1 = 6, r = -1/2`, `|r| < 1` → converges: `S = 6 / 1.5 = 4`
4. `r = 2`, `|r| ≥ 1` → diverges, no finite sum
5. `0.454545... = a1/(1-r)` with `a1 = 0.45, r = 0.01` →
   `0.45/0.99 = 45/99 = 5/11`
