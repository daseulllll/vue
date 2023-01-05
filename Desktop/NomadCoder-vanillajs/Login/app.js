/* const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");*/

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

//loginForm, loginInput 처럼 중요한 정보 x 또는 내가 만든 변수명 틀릴수도있따!!! ==> 대문자로 작성햇삼
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event){
// form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
// preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
    event.preventDefault();
    // console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
   // greeting.innerText = "Hello " + username;  ▽동일
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("clicked");
}
// link.addEventListener("click",handleLinkClick);

   /*  console.log(loginInput.value);
    console.log("click!!");
    const username = loginInput.value;
    console.log(username);
    if(username === ""){
       alert("Please write your name");
    } else if(username.length > 15){
        alert("Your name is too long.");
    }*/
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greetings
    // greeting.innerText = `Hello ${savedUsername}`; 
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername)
}






