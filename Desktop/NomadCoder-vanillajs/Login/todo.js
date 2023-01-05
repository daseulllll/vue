const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //==document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = []; 비어있기 때문에, 새로 입력한 값들만 저장되고, 이전 데이터는 지워짐.
//고로 const -> let으로 업데이트 가능하도록 만들엇
let toDos = [];

 /*localStorage는 only Text만 저쟝저쟝!
JSON.stringify() : JS object or array or 어떤 JS코드건 간에 String으로 만들어줌.
JSON.parse() : JS가 이해할 수 있는 살아있는(?)array로 만들어줌.
 
 */
function saveToDos(){   
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    // console.dir(event.target.parentElement.innerText);
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    // console.log(li.id);
    // console.log(type of li.id); -String
    li.remove();     
    //toDo는 toDos DB에 있는 요소 중 하나, 그래서 (toDo) => toDo.id !== li.id 이 함수는 DB에 있는 모든 것과 함께 실행됨.
    // toDos toDo.id - number , li.id - String ------->parseInt()로 변환
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // span.innerText = newTodo;
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//enter --submit 기본동작 ->새로고침
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
       text: newTodo,
        id: Date.now(),//랜덤처럼 생각
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    // toDos.push(newTodo);
    // paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

/*function sayHello(item){       
    console.log("This is the turn of",item);
}*/ // ==parsedToDos.forEach(sayHello); == parsedToDos.forEach((item)=>console.log("This is the turn of",item));

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos); ["a","b","c"]

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
   // console.log(parsedToDos); // (3) ['a', 'b', 'c']
    parsedToDos.forEach(paintToDo);
}
//id 有==>삭제 할 수 이쏴~~~!
//forEach와 filter는 비슷하다!
function sexyFilter(){

}
/*[1,2,3,4].filter(sexyFilter) ==>filter는 sexyFilter를 부르고, 1,2,3,4에 sexyFilter가 차례대로 실행됨.=>반복
새로운 array와 object item 유지하고싶으면!!!
sexyFilter()는 반드시 true return 해야함! 
sexyFilter(3) ==>JS가 3번 부른 것!

true return 했을 때!
sexyFilter(1) = 1
sexyFilter(2) = 2
sexyFilter(3) x 3   =>if, return false ==>3빼고 1,2,4만 유지
sexyFilter(4) = 4


function sexyFilter(){return true}
undefined
[1,2,3,4,5].filter(sexyFilter)
(5) [1, 2, 3, 4, 5]
function sexyFilter(item){return item !==3}    =>false (3 != 3)
undefined
[1,2,3,4,5].filter(sexyFilter)
(4) [1, 2, 4, 5]

4보다 큰 수 지우고싶다?
function sexyFilter(item){return item <= 3}
*/
