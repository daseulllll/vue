const a = 5;

console.log(a+2);
console.log(a*2);
console.log(a/2);

const amIFat = null;    //always const 상수, 생성후 변경x
let something;          //sometimes let 생성할때 사용, 값 (업데이트) 변경o
console.log(something,amIFat); //never var 재선언 o(과거형)

//boolean ->T/F
//undefined=값이 정의되지 않음
//null=값이 없음이 할당된다 즉, 정의됨

const dayOfWeek = ["mon","tue","wed","thu","fri","sat"]; //array :하나의 variable안에 데이터list 가지는 것.  쉼표로 구분, []

//Get Item from Array
console.log(dayOfWeek);
dayOfWeek[0] = "sun"; //array 교체(update)
console.log(dayOfWeek);
console.log("=================");

//Add one more day to the array
dayOfWeek.push("sun");
console.log(dayOfWeek);

/////////////////////////////////////////////////2022.11.21


// {object} : property를 가진 데이터 저장(설명정보 ㅇ),
// array로 하면 각각 뭘 해당하는 바 알 수 없음. 고로 list -> array 
const player = {
    name : "nico",
    points : 10,
    fat : true,
 }
 console.log(player); //console. ==>object에서 얻어오는 것
 console.log(player.name);
 player.lastName = "potato"; //property 추가 가능(업데이트)
 player.fat = false;        //이전에 const 변경못한다고 했었는데, const내에 업데이트는 가능
 console.log(player.fat);


 //function : 반복해서 사용할 수 있는 코드조각/ () : 실행한다는 뜻
 //argument(인수) : ↓여러개 받을 수 ㅇ/ function을 실행하는 동안 정보를 function에게 보낼 수 있는 방법
 function sayHello(nameOfPerson,age){   //데이터를 받는 방법은 ()에 데이터 추가하는 것,
    console.log(nameOfPerson); // nameOfPerson은 이 블럭안에서만 존재, 이 function에만 존재!
 }          //sayHello에 들어온 데이터 -> nameOfPerson gogo~~ 고로 콘솔 찍으면 nico,dal,lynn출력됨

 sayHello("nico",10);
 sayHello("dal",20);
 sayHello("lynn",30);
 
 
 function plus(a,b){      
    console.log(a+b);
 }
 function divide(a,b){
    console.log(a / b);
 }
 plus(60,8);
 divide(98,20);

 const players= {   //{} object
    name :"nico",
    sayHello: function(otherPersonName){
        console.log("hello "+otherPersonName + " nice to meet you");
    }
 };
 console.log(players.name);
 players.sayHello("lynn");
 players.sayHello("nico");
 //=====================================2022.11.22

const calculator = {
    add : function(a,b){
        console.log(a+b);
        return a+b;     //return하면 해당함수 끗!
        console.log(a+b);  //작동x
    },
    minus : function(a,b){
        console.log(a-b);
    },
    divide : function(a,b){
        console.log(a/b);
    },
    multi : function(a,b){
        console.log(a*b);
    },
    power : function(a,b){
        console.log(a**b);
    },
}
calculator.add(599,789);
calculator.minus(7878,877);
calculator.divide(384,4);
calculator.multi(8,77);
calculator.power(7,7);

const plusResult = calculator.add(2,3);    //5
const minusResult = calculator.minus(plusResult,10);    // -5
const timesResult = calculator.multi(10, minusResult);  //-50
const divideResult = calculator.divide(timesResult, plusResult);    //-10
const powerResult = calculator.power(divideResult,minusResult);     //-0.00000999999999999

console.log("=====================");

const age = 96;
function calculatorKrAge(ageOfForeigner){
   return ageOfForeigner + 2;
}

const KrAge = calculatorKrAge(age);
console.log(KrAge);

//conditionals 조건문 


/*prompt() : 창 띄워서 값 받음, 답할때까지 코드멈춤. 오래된 방법, css바꾸지도 못함 
const age1 = parseInt(prompt("How old are you?"));
console.log(age1);
//typeof : variable의 type보는 방법, String이 기본값
console.log(typeof age1); */

//parseInt : String -> number로 변환, 숫자가 아닌게 입력되면 변환이 안됨. NaN(not a number)
console.log(typeof "15", typeof parseInt("15"));    //string, number

//isNaN : (not a number)-T/F
// =================================11.23

if(isNaN(age)){
    console.log("Please write a number");
} else{
    console.log("Thank you for writing your age");
}

if(isNaN(age)){
    console.log("Please write a number");
} else if(age<18){              //else if 들이 false여야 else 실행
    console.log("You are too young");
} else if( age >= 18 && age <= 50){    // && : and, || :or
    console.log("You can drink");   
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if(age >80){
    confirm.log("You can do whatever you want")
} else{               //else는 선택사항
    console.log("You can drink");
}
// =================================#2 end!