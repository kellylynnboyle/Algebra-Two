# Statistical Inferences — Algebra II Study Notes (Unit 7, Tentative)

> Per the course syllabus ([course-info.md](course-info.md)), "Statistical Inferences" is
> listed as Unit 7 and marked **"(Tentative)"** — it may or may not actually be reached this
> year, depending on pacing. The Schoology materials page itself couldn't be reached from
> this environment (NMUSD login required, domain blocked by network egress rules), so the
> syllabus's specific reading/assignment list for this unit isn't reflected here — these
> notes cover the standard intro-statistics curriculum for Algebra II. Paste in specifics
> from Schoology (subtopic order, vocab list, assigned problems) to refine further if/when
> the unit is actually taught.

## 1. Population vs. Sample

- **Population**: the *entire* group you want to know something about (every student in a
  school, every widget off an assembly line, every voter in a country).
- **Sample**: a smaller subset of the population that is actually measured/surveyed.

Statistics rarely has access to an entire population (too large, too expensive, too slow to
measure), so it uses a sample and reasons back to the population — that reasoning process is
**statistical inference** (more on this in Section 7).

| | Describes | Value called |
|---|---|---|
| Population | the whole group | **parameter** |
| Sample | a subset of the group | **statistic** |

### Parameter vs. Statistic

- A **parameter** is a number that describes a *population* (e.g., the true mean height of
  every student at a school). It is usually unknown/fixed — you'd have to measure everyone
  to know it exactly.
- A **statistic** is a number that describes a *sample* (e.g., the mean height of 30 randomly
  chosen students). It varies from sample to sample and is used to *estimate* the parameter.

**Example**: A pollster wants to know what fraction of all US voters (population) support a
ballot measure. The true fraction is a parameter. She surveys 1,000 voters (sample); the
fraction of *those* 1,000 who support it is a statistic — an estimate of the parameter.

## 2. Measures of Center

Given a data set, three common ways to describe a "typical" value:

- **Mean** (`x̄` for a sample, `μ` for a population): sum of all values divided by how many
  there are. `mean = (Σx) / n`
- **Median**: the middle value when the data is sorted (average of the two middle values if
  `n` is even).
- **Mode**: the value(s) that occur most often. A data set can have no mode, one mode, or
  several (multimodal).

**Example**: Data set `4, 7, 7, 9, 13`.
- Mean: `(4 + 7 + 7 + 9 + 13)/5 = 40/5 = 8`
- Median: already sorted, middle value = `7`
- Mode: `7` (appears twice, more than any other value)

**Example**: Data set `2, 4, 6, 8` (even count).
- Median: average of the two middle values `4` and `6` → `(4+6)/2 = 5`

The mean is sensitive to **outliers** (extreme values); the median is not. For skewed data
or data with outliers, the median is often a more representative "typical" value.

## 3. Measures of Spread

Center alone doesn't tell you how *spread out* the data is. Two data sets can share the same
mean but look very different.

- **Range**: `max - min`. Simple, but only uses two data points.
- **Variance** (`s²` for a sample, `σ²` for a population): the average of the squared
  deviations from the mean.
- **Standard deviation** (`s` or `σ`): the square root of the variance — brings the units
  back in line with the original data (variance is in squared units).

```
variance = Σ(x - mean)^2 / n
standard deviation = √variance
```

(A sample variance technically divides by `n - 1` instead of `n` in more advanced treatments;
Algebra II typically uses `n` for simplicity unless told otherwise.)

**Example**: Data set `2, 4, 4, 4, 5, 5, 7, 9` (mean = `5`).

| `x` | `x - mean` | `(x - mean)^2` |
|---|---|---|
| 2 | -3 | 9 |
| 4 | -1 | 1 |
| 4 | -1 | 1 |
| 4 | -1 | 1 |
| 5 | 0 | 0 |
| 5 | 0 | 0 |
| 7 | 2 | 4 |
| 9 | 4 | 16 |

Sum of squared deviations = `32`. `variance = 32/8 = 4`. `standard deviation = √4 = 2`.

A small standard deviation means data clusters tightly around the mean; a large one means
data is spread out widely.

## 4. The Normal Distribution

Many real-world data sets (heights, test scores, measurement errors) roughly follow a
**normal distribution** — a symmetric, bell-shaped curve.

Key features:

- Symmetric about the center; **mean, median, and mode all coincide** at that center.
- Shape is fully determined by two numbers: the **mean** (`μ`, where the peak is) and the
  **standard deviation** (`σ`, how wide/spread the curve is).
- The curve never touches the horizontal axis — it extends infinitely in both directions,
  approaching zero.

### The Empirical Rule (68-95-99.7 Rule)

For data that's normally distributed, the percentage of data within each band of standard
deviations from the mean is fixed:

| Range | Approx. % of data |
|---|---|
| `μ ± 1σ` | 68% |
| `μ ± 2σ` | 95% |
| `μ ± 3σ` | 99.7% |

**Example**: Test scores are normally distributed with `μ = 80`, `σ = 5`.
- 68% of scores fall between `80 - 5 = 75` and `80 + 5 = 85`.
- 95% of scores fall between `80 - 10 = 70` and `80 + 10 = 90`.
- 99.7% of scores fall between `80 - 15 = 65` and `80 + 15 = 95`.

Since the curve is symmetric, half of the "leftover" outside a band falls on each side. E.g.,
since 68% is within `μ ± 1σ`, the remaining 32% is split evenly: 16% below `75` and 16% above
`85`.

## 5. Z-Scores

A **z-score** tells you how many standard deviations a data value `x` is from the mean —
it standardizes values so data from different distributions can be compared.

```
z = (x - mean) / standard deviation
```

- `z = 0` → the value equals the mean.
- `z > 0` → the value is above the mean; `z < 0` → below the mean.
- Combined with the empirical rule, `z = 1` marks the edge of the middle 68%, `z = 2` the
  edge of the middle 95%, and so on.

**Example**: Using the test scores above (`μ = 80, σ = 5`), a student scores `x = 90`.
`z = (90 - 80)/5 = 10/5 = 2` — this student scored 2 standard deviations above the mean
(near the top ~2.5% of the class, using the empirical rule).

**Example**: A different student scores `x = 72.5`.
`z = (72.5 - 80)/5 = -7.5/5 = -1.5` — this student scored 1.5 standard deviations below
the mean.

Z-scores are also how you compare values from *different* distributions — e.g., comparing a
test score to an SAT score by converting both to z-scores.

## 6. Sampling Methods

How a sample is chosen matters — a poorly chosen sample can give a **biased** statistic that
doesn't reliably estimate the population parameter, no matter how large it is. A sample
should be representative of the population it's drawn from for an inference to be valid.

| Method | How it works |
|---|---|
| Simple random sample | every member of the population has an equal chance of being chosen (e.g., drawing names from a hat) |
| Stratified sample | population is split into subgroups ("strata") by a shared trait (grade level, gender, etc.), then a random sample is taken from *each* subgroup |
| Systematic sample | pick a random starting point, then select every `k`-th member from a list (e.g., every 10th name) |
| Cluster sample | population is split into naturally occurring groups ("clusters," e.g., classrooms or city blocks), then a few *whole clusters* are randomly selected and everyone in them is sampled |

**Why it matters**: a **biased sample** (e.g., only surveying people in one location, or only
people who volunteer to respond) can make a statistic misleading even with a huge sample
size — the sample no longer represents the population, so any inference drawn from it about
the population is unreliable. Random selection (in any of the forms above) is what allows a
sample statistic to be trusted as a fair estimate of the population parameter.

## 7. Statistical Inference, Margin of Error, and Confidence Intervals

**Statistical inference** is the process of using data from a sample to make a claim (an
estimate, a prediction, a decision) about the population it came from. Since a sample
statistic almost never exactly equals the population parameter, inference has to account for
uncertainty — that's what margin of error and confidence intervals are for.

### Margin of Error

The **margin of error** describes how far off a sample statistic might reasonably be from
the true population parameter, due to the randomness of which sample happened to get picked.
A smaller margin of error means a more precise estimate. All else equal, a **larger sample
size shrinks the margin of error** (more data → less random fluctuation between samples).

### Confidence Intervals

A **confidence interval** takes a sample statistic and builds a range around it, using the
margin of error:

```
confidence interval = statistic ± margin of error
```

**Example**: A survey of 500 students finds that 60% support a new dress code, with a
reported margin of error of 4%. The confidence interval is `60% ± 4%`, i.e. `56%` to `64%`.
The inference: "we're confident the *true* population percentage in favor is somewhere in
that range" — not that it's exactly 60%.

A **confidence level** (commonly 95%) describes how often intervals built this way would
actually capture the true population parameter, if the sampling process were repeated many
times. A 95% confidence interval does *not* mean "there's a 95% chance the true parameter is
in this one interval" — it means the *method* captures the true parameter in about 95% of
samples over the long run. (The precise math behind confidence levels belongs to a later
statistics course — for Algebra II, the conceptual idea of "estimate ± a margin of
uncertainty" is the key takeaway.)

## 8. Quick Reference

| Concept | Key idea |
|---|---|
| Population / sample | entire group vs. subset actually measured |
| Parameter / statistic | number describing population vs. number describing sample |
| Mean, median, mode | measures of center (typical value) |
| Range, variance, standard deviation | measures of spread |
| `variance = Σ(x - mean)^2 / n` | average squared deviation from the mean |
| `standard deviation = √variance` | typical distance from the mean, in original units |
| Normal distribution | symmetric bell curve; mean = median = mode |
| Empirical (68-95-99.7) rule | % of data within 1σ, 2σ, 3σ of the mean, for normal data |
| `z = (x - mean)/standard deviation` | number of standard deviations `x` is from the mean |
| Random / stratified / systematic / cluster sampling | methods to get a representative sample |
| Statistical inference | using sample data to draw a conclusion about a population |
| Margin of error | how far a statistic might reasonably be from the true parameter |
| Confidence interval | `statistic ± margin of error` — a range likely to contain the parameter |

## 9. Practice Problems

1. A city wants to know the average commute time for all its residents (2 million people).
   It surveys 800 randomly chosen residents. Identify the population, the sample, and
   whether "average commute time of the 800 surveyed" is a parameter or a statistic.
2. Find the mean, median, and mode of: `3, 5, 5, 8, 9, 10, 10, 10`.
3. Find the range, variance, and standard deviation of: `6, 8, 10, 12, 14` (mean = `10`).
4. Adult heights are normally distributed with `μ = 66` inches and `σ = 3` inches. Using the
   empirical rule, what range of heights includes about 95% of adults?
5. Using the distribution in problem 4, find the z-score for a person who is 72 inches tall,
   and describe what it means in one sentence.
6. A researcher randomly picks 5 entire classrooms out of a school and surveys every student
   in those classrooms. Which sampling method is this?
7. A teacher wants a sample representative of each grade level, so she randomly selects 10
   students from each of grades 9, 10, 11, and 12 separately. Which sampling method is this?
8. A survey of 400 voters finds 55% support a proposal, with a margin of error of 3%. Write
   the confidence interval, and explain in one sentence what it means to have a 95%
   confidence level.

<details>
<summary>Answers</summary>

1. Population: all 2 million residents. Sample: the 800 surveyed. "Average commute time of
   the 800 surveyed" is a **statistic** (it describes the sample, and is used to estimate
   the population parameter).
2. Mean: `(3+5+5+8+9+10+10+10)/8 = 60/8 = 7.5`. Median: sorted already, middle two values
   are `8` and `9` → `(8+9)/2 = 8.5`. Mode: `10` (appears 3 times).
3. Range: `14 - 6 = 8`. Deviations from mean `10`: `-4, -2, 0, 2, 4`; squared: `16, 4, 0, 4,
   16`, sum = `40`. Variance: `40/5 = 8`. Standard deviation: `√8 ≈ 2.83`.
4. 95% falls within `μ ± 2σ` → `66 ± 2(3) = 66 ± 6` → about **60 to 72 inches**.
5. `z = (72 - 66)/3 = 6/3 = 2` — this person's height is 2 standard deviations above the
   mean (taller than about 97.5% of adults, using the empirical rule).
6. **Cluster sampling** (whole intact groups selected, everyone within them sampled).
7. **Stratified sampling** (population split into subgroups by grade, random sample from
   each).
8. Confidence interval: `55% ± 3%` → **52% to 58%**. A 95% confidence level means that if
   this sampling process were repeated many times, about 95% of the resulting intervals
   would contain the true population percentage in favor.

</details>
