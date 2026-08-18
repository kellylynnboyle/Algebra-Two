// Shared quiz engine for Algebra II unit quizzes.
// Each quiz page sets window.QUIZ_TITLE and window.QUIZ_DATA before loading this script.
// QUIZ_DATA is an array of: { question: string, choices: string[], correctIndex: number, explanation: string }

(function () {
  function init() {
    const data = window.QUIZ_DATA || [];
    const title = window.QUIZ_TITLE || "Quiz";
    const root = document.getElementById("quiz-root");
    const titleEl = document.getElementById("quiz-title");
    if (titleEl) titleEl.textContent = title;
    if (!root || !data.length) {
      if (root) root.textContent = "No questions loaded.";
      return;
    }

    let current = 0;
    let score = 0;

    function render() {
      const q = data[current];
      root.innerHTML = "";

      const progress = document.createElement("div");
      progress.className = "quiz-progress";
      const left = document.createElement("span");
      left.textContent = `Question ${current + 1} of ${data.length}`;
      const right = document.createElement("span");
      right.textContent = `Score: ${score}`;
      progress.appendChild(left);
      progress.appendChild(right);
      root.appendChild(progress);

      const bar = document.createElement("div");
      bar.className = "quiz-progress-bar";
      const fill = document.createElement("div");
      fill.className = "quiz-progress-fill";
      fill.style.width = `${(current / data.length) * 100}%`;
      bar.appendChild(fill);
      root.appendChild(bar);

      const qEl = document.createElement("div");
      qEl.className = "quiz-question";
      qEl.textContent = q.question;
      root.appendChild(qEl);

      const choicesEl = document.createElement("div");
      choicesEl.className = "quiz-choices";
      q.choices.forEach((choice, i) => {
        const btn = document.createElement("button");
        btn.className = "quiz-choice";
        btn.type = "button";
        btn.textContent = choice;
        btn.addEventListener("click", () => selectChoice(i));
        choicesEl.appendChild(btn);
      });
      root.appendChild(choicesEl);

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.id = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite");
      root.appendChild(feedback);

      const actions = document.createElement("div");
      actions.className = "quiz-actions";
      actions.id = "quiz-actions";
      root.appendChild(actions);
    }

    function selectChoice(i) {
      const q = data[current];
      const buttons = root.querySelectorAll(".quiz-choice");
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) btn.classList.add("correct");
        else if (idx === i) btn.classList.add("incorrect");
      });

      const isCorrect = i === q.correctIndex;
      if (isCorrect) score++;

      const feedback = document.getElementById("quiz-feedback");
      feedback.className =
        "quiz-feedback " + (isCorrect ? "quiz-feedback-correct" : "quiz-feedback-incorrect");
      feedback.textContent = (isCorrect ? "Correct. " : "Not quite. ") + (q.explanation || "");

      const actions = document.getElementById("quiz-actions");
      const nextBtn = document.createElement("button");
      nextBtn.className = "quiz-next";
      nextBtn.type = "button";
      nextBtn.textContent = current === data.length - 1 ? "See Results" : "Next Question";
      nextBtn.addEventListener("click", next);
      actions.appendChild(nextBtn);
      nextBtn.focus();
    }

    function next() {
      current++;
      if (current >= data.length) {
        renderResults();
      } else {
        render();
      }
    }

    function renderResults() {
      root.innerHTML = "";
      const pct = Math.round((score / data.length) * 100);

      const results = document.createElement("div");
      results.className = "quiz-results";

      const scoreEl = document.createElement("div");
      scoreEl.className = "quiz-results-score";
      scoreEl.textContent = `${score} / ${data.length}`;
      results.appendChild(scoreEl);

      const pctEl = document.createElement("div");
      pctEl.className = "quiz-results-pct";
      pctEl.textContent = `${pct}%`;
      results.appendChild(pctEl);

      const msgEl = document.createElement("div");
      msgEl.className = "quiz-results-message";
      msgEl.textContent = message(pct);
      results.appendChild(msgEl);

      root.appendChild(results);

      const actions = document.createElement("div");
      actions.className = "quiz-actions";
      const restartBtn = document.createElement("button");
      restartBtn.className = "quiz-next";
      restartBtn.type = "button";
      restartBtn.textContent = "Restart Quiz";
      restartBtn.addEventListener("click", () => {
        current = 0;
        score = 0;
        render();
      });
      actions.appendChild(restartBtn);
      root.appendChild(actions);
    }

    function message(pct) {
      if (pct === 100) return "Perfect score.";
      if (pct >= 80) return "Solid grasp of this unit.";
      if (pct >= 60) return "Decent — worth reviewing the questions you missed.";
      return "Worth reviewing the unit notes before moving on.";
    }

    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
