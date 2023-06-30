/**
 * 1. Зробити запуск гри(запускати функції створення гравця, ворога, бпла, бонусів).
 * 
 * 2. Зробити кінець гри.
 */

/**================
 *  < Початок гри >
 =================*/

let btnStartGame = document.getElementById('btnStartGame');

btnStartGame.onclick = function() {

    let skin = document.querySelector('.skins input[type=radio]:checked').value;

    let startGameBlock = document.querySelector('.start-block');        
    startGameBlock.style.display = 'none';
    
    let startGameTitle= document.querySelector('.start-game-title');
    startGameTitle.style.display = 'none';

    createPlayer(skin);         //   створення гравця

    createEnemyWithDelay();     //   створення ворогів

    createBplaWithDelay();      //   створення бпла

    setTimeout(createBonusLifeWithDelay, 250000);    // створення бонусу життя(черешеньки) з затримкою 250 секунд


    setTimeout(createTntWithDelay, 18000);  //   створення бонусу вибухівки(кавуна) з затримкою 18 секунд

    bgSound();                  //   запуск фонової музики

    createLifes();              //   створення життів
}



/**================
 *  < Кінець гри >
 =================*/

function endGame(){
    let endGameBlock = document.querySelector('.end-game');
        endGameBlock.classList.remove('hidden');            // показ блоку кінця гри

    let menu = document.querySelector('.menu');
        menu.style.display = 'none';                        // сховати блок меню

    let endScore = document.querySelector('.end-score');
        endScore.innerText = gameScore;                     // вивід фінальної кількості балів у блок кінця гри
        
    let audio = document.querySelector('#audio');
        audio.pause();                                      // зупинка фонової музики

        isGameOver = true;
        app.innerHTML = "";

        endGameSound()                                      // звук кінця гри

}

let btnRestartGame = document.querySelector('.btnRestart');

btnRestartGame.onclick = function(){
    location.reload();                                      // перезапуск гри
}
