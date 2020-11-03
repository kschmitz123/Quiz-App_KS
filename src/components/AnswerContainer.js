import { createElement } from "../utils/elements";
import "./quizCard.css";
import storeScore from "../utils/storeScore";
import getScore from "../utils/getScore";

function AnswerContainer(answers, correct_answer) {
  let playerScore = "score";

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
          storeScore(playerScore, 1);

          document.querySelector(".score").innerText =
            "Score: " + getScore(playerScore);
        } else {
          button.classList.add("incorrect__answer");
        }
      },
    });
    return button;
  });

  const answerContainer = createElement("div", {
    className: "quizCard__answers",
    children: [...allAnswersRandom],
  });
  return answerContainer;
}

export default AnswerContainer;
