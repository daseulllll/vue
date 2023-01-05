const API_KEY="본인키ㅣㅣ";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url);
    // JS가 대신 URL 불러줌(도구-Network)
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        // console.log(data.name, data.weather[0].main);
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//위치좌표 찍어줌,  getCurrentPosition(args 2개)성공했을때 실행될 함수, 에러발생했을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


/*혹시 Live Server를 이용하시면 host설정을 개인ip를 입력하셨을 겁니다.
접속 URL 예 ) 192.168.0.1:5050/index.html
이러면 Geolocation API 개인정보보안떄문에 작동하지 않고 warning이 뜹니다.
Geolocation API는 https (기본), localhost(예외) 에서만 작동합니다. 
localhost:port/index.html로 접속하시면 정상 작동합니다. */


//날씨 https://openweathermap.org/