export default function getScore(RecentScore) {
  const playerScore = JSON.parse(localStorage.getItem(RecentScore) || "[]");

  let score = 0;

  if (playerScore.length > 0) {
    playerScore.forEach((value) => {
      score += value;

      document.querySelector(".score").innerText = "Score: " + value;
    });
  }

  return score;
}
