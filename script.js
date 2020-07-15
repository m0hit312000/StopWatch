const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

var startTime, sT, s, m, h, timeStamp = 0;

function displayTime()
{
        var spentTime;
        spentTime = Date.now() - timeStamp ;
        console.log(spentTime);
        h = Math.floor(spentTime/3600000);
        m = Math.floor((spentTime%3600000)/60000);
        s = Math.floor((spentTime%60000)/1000);
        hr.textContent = (h>=10) ? h :'0' + h;
        min.textContent = (m>=10) ? m :'0' + m;
        sec.textContent = (s>=10) ? s : '0' + s;
}

start.addEventListener("click", () => {
    
    
     startTime = Date.now();
     sT = setInterval(() => 
     {
       if(!timeStamp)  
       {
          timeStamp = startTime; 
       } 
       displayTime();     
     },1000);
     start.disabled = true;

});
stop.addEventListener('click', () => {
  
    clearInterval(sT);
    start.disabled = false;

});
reset.addEventListener('click', () => {
   
    clearInterval(sT);
    h = 0, m = 0, s = 0, startTime = null;
    hr.textContent = '0' + h;
    min.textContent = '0' + m;
    sec.textContent = '0' + s;
    start.disabled = false;

});