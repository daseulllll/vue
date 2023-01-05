const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; 

//createElement() : JS에서 HTML을 만든 것! == html에서 <img src="">
const bgImage = document.createElement("img");

console.log(bgImage);

bgImage.src = `img/${chosenImage}`;

//prepend/appendChild() : body에 html추가! pre 가장 위,app 가장 뒤
document.body.appendChild(bgImage);