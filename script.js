/**
 *   Зробити функцію руху хмар з випадковим інтервалом створення.
 */

let app = document.querySelector('#gameElements')

isGameOver = false;

 /** 
  *=====================================
  *  < Функція випадкового вибору умов >
  *=====================================
  */

function random(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

 /** 
  *============================
  *  < Функція зміни рахунку >
  *============================
  */
let gameScore = 0;
function changeScore(score){
    gameScore = gameScore + score;
    let scoreBlockText = document.querySelector('#score span');
    scoreBlockText.innerText = gameScore;
}
