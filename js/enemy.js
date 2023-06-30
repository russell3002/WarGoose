/**
 * 1. Створити функцію створення ворогів.
 * 
 * 2. Створити функцію руху ворога(зміна швидкості руху залежно від кількості балів).
 * 
 * 3. Створити функцію випадкової частоти створення ворогів(збільшення частоти залежно від кількості балів).
 * 
 * 4. Створити функцію видалення ворогів.
 * 
 * 5. Створити функцію створення бпла.
 * 
 * 6. Створити функцію руху бпла.
 * 
 * 7. Створити функцію випадкової частоти створення бпла.
 * 
 * 8. Створити функцію видалення бпла.
 */


/** 
 *===============================
 *  < Функція створення ворога >
 *===============================
 */
 function createEnemy(){
    if(isGameOver){
      return ;
    }
    let left = random(150, document.querySelector('body').offsetWidth - 225);
    let enemy = document.createElement('div');
        enemy.className = "enemy " + skinEnemy();
        enemy.style.left = left + "px";
  
    
    app.appendChild(enemy);
    moveEnemy(enemy);
  }
  
/** 
 *=============================================
 *  < Функція випадкового вибору скіна ворога >
 *=============================================
 */ 
  
  function skinEnemy(){
    if(random(1, 4) == 1){
        return"skin1";
    }
    if(random(1, 4) == 2){
        return"skin2";
    }
    if(random(1, 4) == 3){
        return"skin3";
    } else {
        return"skin4";
    }
  }
  
  
  /** 
   *=========================================================================
   *  < Функція руху ворога зі зміною швидкості залежно від кількості балів>
   *=========================================================================
   */
  
  
  
  function moveEnemy(enemy){
    let timerID = setInterval(function(){
    let speedEnemy = 5;

    let enemyDelay = "";

    if(gameScore < 10){         // швидкість руху міняється в залежності від кількості балів
        speedEnemy = 5;
    }
    if(gameScore >= 10 && gameScore < 20){
        speedEnemy = 10;
    }
    if(gameScore >= 20 && gameScore < 30){
        speedEnemy = 15;
    }
    if(gameScore >= 30 && gameScore < 40){
        speedEnemy = 20;
    }
    if(gameScore >= 40 && gameScore < 50){
        speedEnemy = 25;
    }
    if(gameScore >= 50 && gameScore < 60){
        speedEnemy = 30;
    }
    if(gameScore >= 60){
        speedEnemy = 45;
    }
      enemy.style.top = enemy.offsetTop + speedEnemy + "px";
  
      if(enemy.offsetTop > document.querySelector('body').offsetHeight){
        removeEnemy(enemy);

        clearInterval(timerID);

        lossOfLife();

        lossOfLifeAudio();
      }
    }, 1)
  }
  
  /*=======================================================================================================
    < Функція випадкової частоти створення ворога зі збілшенням цієї частоти залежно від кількості балів >
  =======================================================================================================*/
  
  
  function createEnemyWithDelay() { 
  let enemyDelay = random(5000, 10000);

  if(gameScore < 10){                       // умови випадкової затримки міняється в залежності від кількості балів
    enemyDelay = random(5000, 10000);
  }
  if(gameScore >= 10 && gameScore < 20){
    enemyDelay = random(4000, 9000);
  } 
  if(gameScore >= 20 && gameScore < 30){
    enemyDelay = random(3000, 8000);
  }
  if(gameScore >= 30 && gameScore < 40){
    enemyDelay = random(2000, 7000);
  } 
  if(gameScore >= 40 && gameScore < 50){
    enemyDelay = random(2000, 6000);
  }
  if(gameScore >= 50 && gameScore < 60){
    enemyDelay = random(2000, 5000);
  }
  if(gameScore >= 60){
    enemyDelay = random(2000, 3000)
  }
    createEnemy();
    setTimeout(createEnemyWithDelay, enemyDelay);
  }
  
  /** 
   *===============================
   *  < Функція видалення ворога >
   *===============================
   */
   function removeEnemy(enemy) {
    enemy.className = "enemy boom";
    setTimeout(function() {
      enemy.remove();
    }, 800);
  }


 /*==================================
  *  < Функція створення бпла >
  *==================================
  */
function createBpla(){
     if(isGameOver){
         return ;
       }
     let left = random(0, document.querySelector('body').offsetWidth / 2);
     let top = random(0, document.querySelector('body').offsetHeight / 2)
     let bpla = document.createElement('div');
     bpla.className = "bpla " + skinBpla();

     let bp = random (1, 2);
     
     if(bp==1){           // умова місця створення бпла зверху
         bpla.style.left = left + "px";
         bpla.style.top = -60 + "px";
     } else {             // умова місця створення бпла зліва
         bpla.style.left = -100 + "px";
         bpla.style.top = top + "px";
     }            
     
     app.appendChild(bpla);
     moveBpla(bpla);
}

 function skinBpla(){       // випадковий вибір скіна бпла
    if(random(1, 2) == 1){
        return"skin1";
    } else {
        return"skin2";
    }
}

 /** 
  *==============================
  *  < Функція руху бпла >
  *==============================
  */
 function moveBpla(bpla){
     let timerID = setInterval(function(){
         bpla.style.top = bpla.offsetTop + 3 + "px";
         bpla.style.left = bpla.offsetLeft + 2 + "px";
         
 
         if(bpla.offsetTop > document.querySelector('body').offsetHeight ||
         bpla.offsetLeft > document.querySelector('body').offsetWidth){
             removeBpla(bpla);
             clearInterval(timerID);
         }
     }, 100);
 };
 
 /** 
  *====================================================
  *  < Функція створення бпла з випадковою затримкою >
  *====================================================
  */

 let bplaDelay = random(10000, 30000);
 function createBplaWithDelay() { 
   createBpla();
   setTimeout(createBplaWithDelay, bplaDelay);
 }
 /** 
  *==================================
  *  < Функція видалення бпла >
  *==================================
  */
  function removeBpla(bpla) {
   bpla.className = "bpla boom";
   setTimeout(function() {
     bpla.remove();
   }, 800);
 }
