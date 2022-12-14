const cookieButton = document.querySelector("#cookieImg");
let counter = 0;

cookieButton.addEventListener("click", function () {
  console.log("The cookie was clicked");
  counter = counter + 1;
  const incCount = document.querySelector("#clickCounter");
  incCount.textContent = counter;
  
});
