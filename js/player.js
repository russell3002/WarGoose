/**
 * 1. Призначити клавіши руху гравця і здійснення пострілу.
 * 
 * 2. Створити функцію пострілу, руху кулі і знищення її після влучення.
 * 
 * 3. Створити функцію потрапляння по ворогу і його знищення.
 * 
 * 4. Створити функцію потрапляння по бпла і його знищення.
 * 
 * 5. Створити функцію створення і втрати життів.
 * 
 * 6. Створити функцію поглинання бонусу "кавуна" при контакті з гравцем і запуск функції знищення всіх ворогів.
 * 
 * 7. Створити функцію знищення всіх наявних ворогів.
 * 
 * 8. Створити функцію знищення всіх бпла.
 */

let player = null;
let lifesPlayer = 5;

/** 
*===============================
*  < Функція створення гравця >
*===============================
*/

function createPlayer(skin) {
    player = document.createElement('div');
    player.className = skin;
    player.id = 'player';

    app.appendChild(player);
}
/** 
 *===========================================================
*  < Призначення клавіш руху гравця і здійснення пострілу >
*===========================================================
*/

document.onkeydown = function (event) {
    switch(event.code){
        case "KeyA":        // кнопка "А" - рух вліво
            moveLeft();
            break;
        case "KeyD":        // кнопка "D" - рух вправо
            moveRight();    
            break;
        case "ArrowLeft":   // кнопка "Вліво" - рух вліво
            moveLeft();     
            break;
        case "ArrowRight":  // кнопка "Вправо" - рух вправо
            moveRight();
            break;
        case "Space":       // кнопка "Пробіл" - постріл
            shot();
            break;
        case "KeyW":        // кнопка "W" - рух вверх
            moveUp();
            break;
        case "KeyS":        // кнопка "S" - рух вниз
            moveDown();
            break;
        case "ArrowUp":     // кнопка "Вверх" - рух вверх
            moveUp();
            break;
        case "ArrowDown":   // кнопка "Вниз" - рух вниз
            moveDown();
            break;
    }
  };
  
/** 
*=================================================================
*  < Функції руху гравця вліво, вправо, вверх і вниз відповідно >
*=================================================================
*/

function moveLeft(){
    if(player.offsetLeft > document.querySelector('body').offsetLeft + 25){     // умова руху, якщо гравець не в лівому краю
        player.style.left = player.offsetLeft - 50 + "px";
    }
}

function moveRight(){
    if(player.offsetLeft + player.offsetWidth < document.querySelector('body').offsetWidth - 50){       // умова руху, якщо гравець не в правому краю
        player.style.left = player.offsetLeft + 50 + "px";
    }
}

function moveUp(){
    if(player.offsetTop > document.querySelector('body').offsetTop + 50){       // умова руху, якщо гравець не в верхньому краю
        player.style.top = player.offsetTop - 50 + "px";
    }
}

function moveDown(){
    if(player.offsetTop + player.offsetHeight < document.querySelector('body').offsetHeight - 5){       // умова руху, якщо гравець не в нижньому краю
        player.style.top = player.offsetTop + 50 + "px";
    }
}

/** 
 *==========================================================================
*  < Функція здійснення пострілу, руху кулі і знищення її після влучення >
*==========================================================================
*/
let pos = 1;

function shot() {
    let bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.top = player.offsetTop + 20 + "px";
    

    
    if(pos == 1){       // умова здійснення пострілу по черзі
        bullet.style.left = player.offsetLeft + (player.offsetWidth / 2) - 30 + "px";
        pos = 2;
    } else {
        bullet.style.left = player.offsetLeft + (player.offsetWidth / 2) + 15 + "px";
        pos = 1;
    }
    
    app.appendChild(bullet);
    shotSound();

    let timerID = setInterval(function() {
        let hitEnemy = isHitEnemy(bullet);
        let hitBpla = isHitBpla(bullet);

        if (hitEnemy || hitBpla || bullet.offsetTop < 0) {
            bullet.remove();
            clearInterval(timerID);
        }
        bullet.style.top = bullet.offsetTop - 30 + "px";

    }, 100);
}

/** 
 *====================================================
*  < Функція потрапляння по ворогу і його знищення >
*====================================================
*/ 
function isHitEnemy(bullet){
    let enemies = document.querySelectorAll('.enemy');
    for(let i = 0; i < enemies.length; i++){
        let enemy = enemies[i];
        if (enemy != null && !enemy.classList.contains('boom')){
            let top = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight;
            let left = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth;
            if(top && left){
                removeEnemy(enemy);
                boomSound();
                changeScore(1);
                return true;
            }
        }    
    }
    return false;
}

/** 
 *========================================================
*  < Функція потрапляння по бпла і його знищення >
*========================================================
*/
function isHitBpla(bpla){
    let bplas = document.querySelectorAll('.bpla');
    for(let y = 0; y < bplas.length; y++){
        let currentBpla = bplas[y];
        if (currentBpla != null && !currentBpla.classList.contains('boom')){
            let top = bpla.offsetTop > currentBpla.offsetTop && bpla.offsetTop < currentBpla.offsetTop + currentBpla.offsetHeight;
            let left = bpla.offsetLeft > currentBpla.offsetLeft && bpla.offsetLeft < currentBpla.offsetLeft + currentBpla.offsetWidth;
            if(top && left){
                removeBpla(currentBpla);
                boomSound();
                changeScore(5);
                return true;
            }
        }    
    }
    return false;
}


/**======================================
 *  < Функція створення і втрати життів >
 =======================================*/

function lossOfLife(){
    lifesPlayer--;

    if(lifesPlayer <= 0){
        endGame();
    }
    createLifes();
}


function createLifes() {
    let lifesBlock = document.querySelector('.menu .lifes');
    lifesBlock.innerHTML = "";

    for (let i = 0; i < lifesPlayer; i++) {
    let span = document.createElement('span');
    lifesBlock.appendChild(span);
    }
}

function checkCollisionWithPlayer(bonusLife) {
    let bonusLifeRect = bonusLife.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect();

    if (isRectOverlap(bonusLifeRect, playerRect)) {
        removeBonusLife(bonusLife);
        upLife();
    }
}

/*=============================================================================
  < Функція поглинанн бонусу вибухівки при контакті і запуск знищення ворогів >
==============================================================================*/

function checkCollisionTntWithPlayer(tnt) {
    let tntRect = tnt.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect();

    if (isRectOverlap(tntRect, playerRect)) {
        removeTnt(tnt);
        tntAudio();
        destroyAllEnemies();
        destroyAllBpla();
    }
}

/*==========================================
  < Функція знищення всіх наявних ворогів >
===========================================*/

function destroyAllEnemies() {
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function(enemy) {
        enemy.classList.add('boom');
        removeEnemy(enemy);
        changeScore(3);
        
    });
}

/*=============================================
  < Функція знищення всіх наявних астероїдів >
==============================================*/

function destroyAllBpla() {
    let bpla = document.querySelectorAll('.bpla');
    bpla.forEach(function(bpla) {
        bpla.classList.add('boom');
        removeBpla(bpla);
        changeScore(1);
    });
}
