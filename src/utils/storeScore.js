export default function storeScore(RecentScore, score) {
  const playerScore = JSON.parse(localStorage.getItem(RecentScore) || "[]");

  playerScore.push(score);
  localStorage.setItem(RecentScore, JSON.stringify(playerScore));
  document.querySelector(".score").innerText = "Score: " + score;
  return playerScore;
}
