let splash = document.getElementById("splash");
console.log(splash);

console.log(splash.style);

let imageArray = ['smoke', 'ginza', 'seoul'];
let count = 0;

console.log(imageArray.length);

setInterval(changeBackground, 3000);

function changeBackground(){
  splash.style.backgroundImage = `linear-gradient( rgba(247, 0, 169, 0.3), rgba(58, 87, 255, 0.3)), url('images/${imageArray[count]}.jpg')`;
  count = (count + 1) % imageArray.length;
}




console.log("hello testing");
