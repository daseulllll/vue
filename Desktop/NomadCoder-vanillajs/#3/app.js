//JavaScript 는 HTML과 연결되어있다.

/*document.title = "Hello! From JS!";

const h2 = document.getElementById("title");

h2.innerText="Got you!";

console.dir(h2);
console.log(h2.id);
console.log(h2.className);

//javaScript에서 html element를 가져오고 검색하는 것 : getElementsByTagName,getElementsByName -array 를 반환
//getElementsByClassName : 많은 element를 한번에 가지고 와야하는 경우, array 를 반환

/*const hellos = document.getElementsByClassName("hello");

console.log(hellos);*/

//querySelector : element를 CSS방식으로 검색가능,(CSS selector 자체를 전달) -> id 검색하고싶다면 #
//class name hl 가져오고싶은것 적음. + CSS selector방식으로 검색할 수 있음 (ex. h1:first-child) 첫번째element만 가져옴. but,다 가져오고싶다면, querySelectorAll 사용


//console.log(title);
//element 내부 보고싶으면 console.dir();

// const title = document.querySelector("div.hello:first-child h1");

/*

function handleTitleClick(){
    
    const currentColor = h2.style.color;
    let newColor;
    
    if (currentColor === "blue") {
        newColor ="tomato";
    }else{
        newColor = "blue";
    }
    h2.style.color = newColor;
 
    // h1.style.color = "blue";
    // console.log(h1.style.color);
}

h2.addEventListener("click", handleTitleClick);//== h1.onclick = handleTitleClick;
//title.addEventListener("click", handleTitleClick); 와 동일

function handleMouseEnter(){
    h2.innerText = "mouse is here!";
    
}function handleMouseLeave(){
    h2.innerText = "Mouse is gone!";
    
    //: event(on붙은거,어떤 행위를 하는 것)를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
}
h2.addEventListener("mouseenter",handleMouseEnter);
h2.addEventListener("mouseleave",handleMouseLeave);


function handleWindowResize(){
    document.body.style.background = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);

======================================================*/

//style에 적합한 도구는 CSS / js->h1 active.class 전달
//animation에 적합한 도구는 JS

//JS는 html 변경, CSS는 html 보고 style 변경
//"String" -> 지어준 이름, 같은 String (class name) x=> error! =raw value
// const로 지정해서 작성한다면 에러부분을 좀 축소가능

const h1 = document.querySelector(".hello h1")

function handleTitleClick(){
    h1.classList.toggle("active");
    
    
    /*toggle : h1의 classList에 active class가 이미 있는지 확인해서 
    만약 있다면, toggle이 clicked를 제거
    없다면, toggle은 clicked를 classList에 추가

     toggle 하나가 이하동일

    const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);

    //    if(h1.className===clickedClass  /*"active"*){
        // h1.className = " ";
   }else{
        h1.classList.add(clickedClass);  
    // h1.className = clickedClass  /*"active"*;
   }*/
   
}

h1.addEventListener("click",handleTitleClick);