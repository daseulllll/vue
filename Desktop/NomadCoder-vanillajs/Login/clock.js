//interval : '매번' 일어나야 하는 무언가, ex) 매 2초

const clock = document.querySelector("h2#clock");

function getClock(){
    const date= new Date();
   
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours} : ${minutes} : ${seconds}`)

}

//setInterval : ms간격으로 계속 반복실행/  2개의 args받음 (function 이름, ms(milliseconds,호출간격))
getClock(); //즉시호출
setInterval(getClock,1000); //1초마다 호출

//setTimeout :ms 이후 한번만 실행/ 2개의 args받음 (function 이름, ms(milliseconds,호출간격))
//setTimeout(getClock,1000);

//"1".padStart(2,"0") ==>"01" : 문자열이 2개 이상이지 않으면, 앞에 0을 추가해라! / padEnd(뒤쪽 추가)
//"hello".padStart(20,"x") ==>'xxxxxxxxxxxxxxxhello' /원하는 길이로 만들엇



