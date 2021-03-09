//Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var selectedPlayer = 0;
//Тоглогчийн цуглуулсан оноог хадгалах
var playerScore = [0, 0];

//Тоглогчийн ээлжиндээ цугуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDOM = window.document.querySelector(".dice");
diceDOM.style.display = "none";
window.document
  .querySelector(".btn-roll")
  .addEventListener("click", function () {
    //Шооны аль талаараа буусныг хадгалах хувьсагч
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + selectedPlayer
      ).textContent = roundScore;
    } else {
      switchPlayer();
    }
  });

window.document
  .querySelector(".btn-hold")
  .addEventListener("click", function () {
    diceDOM.style.display = "none";
    playerScore[selectedPlayer] = playerScore[selectedPlayer] + roundScore;
    document.getElementById("score-" + selectedPlayer).textContent =
      playerScore[selectedPlayer];
    if (playerScore[selectedPlayer] >= 100) {
      //<div class="player-name" id="name-0">Player 1</div>
      document.getElementById("name-" + selectedPlayer).textContent =
        "WINNER!!!";
      //<button class="btn-hold">
      document.querySelector(".btn-hold").style.display = "none";
      document.querySelector(".btn-roll").style.display = "none";
      diceDOM.style.display = "none";
    } else {
      switchPlayer();
    }
  });

window.document.querySelector(".btn-new").addEventListener("click", newGame);

function newGame() {
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  diceDOM.style.display = "none";
  selectedPlayer = 0;
  playerScore = [0, 0];
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}

function switchPlayer() {
  roundScore = 0;
  diceDOM.style.display = "none";
  document.getElementById("current-" + selectedPlayer).textContent = 0;
  selectedPlayer === 0 ? (selectedPlayer = 1) : (selectedPlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

//<img src="dice-5.png" alt="Dice" class="dice" />
