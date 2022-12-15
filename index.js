// document = ​​​​​​gitCode/DOM-Events/index.html
// const body = document.querySelector("body");

//Cookie Clicker - click cookie img to increase cookie click counter

const cookieButton = document.querySelector("#cookieImg");
let counter = 0;

cookieButton.addEventListener("click", function () {
  console.log("The cookie was clicked");
  counter = counter + 1;
  const incCount = document.querySelector("#clickCounter");
  incCount.textContent = counter;
});

//Magnifying buttons - increase/decrease font size
const paraEle = document.querySelector("#magPara");

const bigButton = document.querySelector("#incrFontSize");

bigButton.textContent = "Increase font size";

bigButton.addEventListener("click", function () {
  console.log("The BIG button was pressed");
  const fontSize = parseInt(paraEle.style.fontSize);
  paraEle.style.fontSize = (fontSize + 1) + "px";
});console.log(paraEle.style.fontSize)


const smallButton = document.querySelector("#decrFontSize");
smallButton.textContent = "Decrease font size";
smallButton.addEventListener("click", function () {
  console.log("The small button was pressed");

  const fontSize = parseInt(paraEle.style.fontSize);
  paraEle.style.fontSize = (fontSize - 1) + "px";
});
