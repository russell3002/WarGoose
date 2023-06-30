/**
 * 1. Зробити функцію фонової музики.
 * 2. Зробити функції звуку:
 *      - пострілу;
 *      - вибуху;
 *      - втрати життя;
 *      - поглинання бонуму життя;
 *      - великого вибуху.
 * 3. Зробити керування звуком(off/on).
 * 4. Зробити керування музикою(off/on)
 */

let audioPlayer = document.getElementById('audio');

/**==================
 *  < Звук пострілу >
 ===================*/

function shotSound(){
    let audioShot = new Audio('audio/shot.mp3');
    audioShot.volume = 0.2;
    audioShot.play();
    audioShot.muted = muted;
}


/**===================
 *  < Фонова музика >
 ====================*/

function bgSound(){
    audioPlayer.volume = 0.1;
    audioPlayer.play();
}

/**=================
 *  < Звук вибуху >
 ==================*/

function boomSound(){
    let audioBoom = new Audio('audio/boom.mp3');
    audioBoom.play();
    audioBoom.muted = muted;
}

/**========================
 *  < Звук втрати життя >
 =========================*/

function lossOfLifeAudio(){
    let audioAlarm = new Audio('audio/alarm.mp3');
    audioAlarm.volume = 0.1;
    audioAlarm.play();
    audioAlarm.muted = muted;
}

/**======================================
 *  < Звук поглаинання бонусу життя(га) >
 =======================================*/


function absorbLifeAudio(){
    let audioLife = new Audio('audio/absorb_life.mp3');
    audio.volume = 0.1;
    audioLife.play();
    audioLife.muted = muted;
}

/**========================
 *  < Звук великого вибуху >
 =========================*/


function tntAudio(){
    let audioTnt = new Audio('audio/big_boom.mp3');
    audioTnt.volume = 0.3;
    audioTnt.play();
    audioTnt.muted = muted;
}

/**====================
 *  < Звук кінця гри >
 =====================*/

function endGameSound(){
    let endGameAudio = new Audio('audio/game_over.mp3');
    endGameAudio.volume = 0.5;
    endGameAudio.play();
    endGameAudio.muted = muted;
}

/**=======================
 *  < Керування звуком >
 ========================*/

let soundBtn = document.querySelector('.menu .audio .sound');
let muted = false;

soundBtn.onclick = function(){
    let soundOnIcon = document.querySelector('.menu .audio .sound .sound-on');
    let soundOffIcon = document.querySelector('.menu .audio .sound .sound-off');
    if(!muted){
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
        muted = true;
    } else {
        soundOffIcon.classList.add('hidden');
        soundOnIcon.classList.remove('hidden');
        muted = false;
    }
}

/**========================
 *  < Керування музикою >
 =========================*/

let musicBtn = document.querySelector('.menu .audio .music');
let mutedM = false;

musicBtn.onclick = function(){
    let musicOnIcon = document.querySelector('.menu .audio .music .music-on');
    let musicOffIcon = document.querySelector('.menu .audio .music .music-off');
    if(!mutedM){
        musicOnIcon.classList.add('hidden');
        musicOffIcon.classList.remove('hidden');
        mutedM = true;
    } else {
        musicOffIcon.classList.add('hidden');
        musicOnIcon.classList.remove('hidden');
        mutedM = false;
    }    
    audioPlayer.muted = mutedM;
}
