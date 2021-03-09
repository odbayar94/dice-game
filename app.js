//Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var selectedPlayer = 1;
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
  });

//<img src="dice-5.png" alt="Dice" class="dice" />
