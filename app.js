//Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var selectedPlayer = 0;
//Тоглогчийн цуглуулсан оноог хадгалах
var playerScore = [0, 0];

//Тоглогчийн ээлжиндээ цугуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

document.querySelector(".btn-get-dice").style.display = "none";

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDomFirst = window.document.querySelector(".dice1");
var diceDomSecond = window.document.querySelector(".dice2");
// diceDomFirst.style.display = "none";
// diceDomSecond.style.display = "none";
window.document
  .querySelector(".btn-roll")
  .addEventListener("click", function () {
    //Шооны аль талаараа буусныг хадгалах хувьсагч
    var diceNumberFirst = Math.floor(Math.random() * 6) + 1;
    diceDomFirst.style.display = "block";
    diceDomFirst.src = "dice-" + diceNumberFirst + ".png";
    var diceNumberSecond = Math.floor(Math.random() * 6) + 1;
    diceDomSecond.style.display = "block";
    diceDomSecond.src = "dice-" + diceNumberSecond + ".png";

    if (diceNumberFirst !== diceNumberSecond) {
      roundScore = roundScore + diceNumberFirst + diceNumberSecond;
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
    diceDomFirst.style.display = "none";
    diceDomSecond.style.display = "none";
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
      diceDomFirst.style.display = "none";
      diceDomSecond.style.display = "none";
    } else {
      switchPlayer();
    }
  });

window.document.querySelector(".btn-new").addEventListener("click", newGame);

function newGame() {
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  diceDomFirst.style.display = "none";
  diceDomSecond.style.display = "none";
  selectedPlayer = 0;
  playerScore = [0, 0];
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".btn-hold").style.display = "block";
  document.querySelector(".btn-roll").style.display = "block";
}

function switchPlayer() {
  roundScore = 0;
  document.getElementById("current-" + selectedPlayer).textContent = 0;
  selectedPlayer === 0 ? (selectedPlayer = 1) : (selectedPlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>

  document.querySelector(".btn-roll").style.display = "none";
  document.querySelector(".btn-get-dice").style.display = "block";
}

window.document
  .querySelector(".btn-get-dice")
  .addEventListener("click", function () {
    diceDomFirst.style.display = "none";
    diceDomSecond.style.display = "none";
    document.querySelector(".btn-get-dice").style.display = "none";
    document.querySelector(".btn-roll").style.display = "block";
  });

//<img src="dice-5.png" alt="Dice" class="dice" />
