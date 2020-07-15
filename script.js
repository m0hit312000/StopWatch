const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

var startTime, sT, s, m, h, timeStamp = 0, spentTime = 0;;

function displayTime()
{
        
        console.log(spentTime);
        h = Math.floor(spentTime/3600000);
        m = Math.floor((spentTime%3600000)/60000);
        s = Math.floor((spentTime%60000)/1000);
        hr.textContent = (h>=10) ? h :'0' + h;
        min.textContent = (m>=10) ? m :'0' + m;
        sec.textContent = (s>=10) ? s : '0' + s;
}

start.addEventListener("click", () => {
    
     if(!sT){
     startTime = Date.now();
     sT = setInterval(() => 
     {
       if(!timeStamp)  
       {
          timeStamp = startTime; 
       } 
        spentTime += Date.now() - timeStamp;
        timeStamp = Date.now();
       displayTime();     
     },1000);
     start.disabled = true;
   }
});
function stopper()
{
    if(sT){
        clearInterval(sT);
        start.disabled = false;
        sT = null; 
     } 
     timeStamp = null;

}
stop.addEventListener('click',stopper);

reset.addEventListener('click', () => {
   
    clearInterval(sT);
    stopper();
    spentTime = 0;
    displayTime();
    start.disabled = false;

});