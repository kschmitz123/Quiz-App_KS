import { createElement } from "../utils/elements";
import "./quizCard.css";
function AnswerContainer(answers, correct_answer) {
  let score = 0;
  const correctBonus = 10;
  const allAnswers = [...answers];

  allAnswers.push(correct_answer);

  function randomizeAnswers(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  randomizeAnswers(allAnswers);

  let allAnswersRandom = allAnswers.map((element) => {
    const button = createElement("button", {
      className: "quizcard__answer__buttons",
      innerHTML: element,
      onclick: function () {
        if (element === correct_answer) {
          button.classList.add("correct__answer");
          incrementScore(correctBonus);
        } else {
          button.classList.add("incorrect__answer");
        }
      },
    });
    return button;
  });

  function incrementScore(num) {
    score += num;
    document.querySelector(".score").innerText = "Score: " + score;
  }

  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [...allAnswersRandom],
  });
  return answerContainer;
}

export default AnswerContainer;
