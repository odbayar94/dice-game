//Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var selectedPlayer = 1;
//Тоглогчийн цуглуулсан оноог хадгалах
var playerScore = [0, 0];

//Тоглогчийн ээлжиндээ цугуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч
var diceNumber = Math.floor(Math.random() * 6) + 1;

window.document.querySelector("#score-0").textContent = playerScore[0];

window.document.querySelector("#score-1").textContent = playerScore[1];

window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

//<img src="dice-5.png" alt="Dice" class="dice" />
//window.document.querySelector(".dice").style.display = "none";

window.document.querySelector(".dice").attributes = "dice-2.png";

var log = window.document.getElementById("current-0");
console.log(log);
