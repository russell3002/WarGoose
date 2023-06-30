
/** 
*======================================================
*  < Функція створення хмар з випадковою затримкою  >
*======================================================
*/

function createCloudWithDelay() {
    let cloudNumber = random(1, 4);     // випадкови вибір набору властивостей хмар
    let cloudFunctionName = "createCloud" + cloudNumber;

    window[cloudFunctionName]();
  
    let cloudDelay = random(3000, 5000);    // випадкова затримка
    setTimeout(createCloudWithDelay, cloudDelay);
  }

/** 
*==================================================
*  < Функція створення хмари з властивостями 1  >
*==================================================
*/

function createCloud1(){
    let cloud = document.createElement('div');
    cloud.className = "cloud skin-1";
    cloud.style.left = random(1, document.querySelector('body').offsetWidth - 400) + "px";
    app.appendChild(cloud);

    let timerId = setInterval(function(){
        cloud.style.top = cloud.offsetTop + 5 + "px";
  
        if(cloud.offsetTop > document.querySelector('body').offsetHeight){
          cloud.remove();
          clearInterval(timerId);
          
        }
      }, 10);
}

/** 
*==================================================
*  < Функція створення хмари з властивостями 2  >
*==================================================
*/

function createCloud2(){
    let cloud = document.createElement('div');
    cloud.className = "cloud skin-2";
    cloud.style.left = random(1, document.querySelector('body').offsetWidth - 100) + "px";
    app.appendChild(cloud);

    let timerId = setInterval(function(){
        cloud.style.top = cloud.offsetTop + 20 + "px";
  
        if(cloud.offsetTop > document.querySelector('body').offsetHeight){
          cloud.remove();
          clearInterval(timerId);
          
        }
      }, 10);
}

/** 
*==================================================
*  < Функція створення хмари з властивостями 3  >
*==================================================
*/

function createCloud3(){
    let cloud = document.createElement('div');
    cloud.className = "cloud skin-3";
    cloud.style.left = random(1, document.querySelector('body').offsetWidth - 200) + "px";
    app.appendChild(cloud);

    let timerId = setInterval(function(){
        cloud.style.top = cloud.offsetTop + 10 + "px";
  
        if(cloud.offsetTop > document.querySelector('body').offsetHeight){
          cloud.remove();
          clearInterval(timerId);
          
        }
      }, 10);
}

/** 
*==================================================
*  < Функція створення хмари з властивостями 4  >
*==================================================
*/

function createCloud4(){
    let cloud = document.createElement('div');
    cloud.className = "cloud skin-4";
    cloud.style.left = random(1, document.querySelector('body').offsetWidth - 150) + "px";
    app.appendChild(cloud);

    let timerId = setInterval(function(){
        cloud.style.top = cloud.offsetTop + 15 + "px";
  
        if(cloud.offsetTop > document.querySelector('body').offsetHeight){
          cloud.remove();
          clearInterval(timerId);
          
        }
      }, 10);
}



createCloudWithDelay()

