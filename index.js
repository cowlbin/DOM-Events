let counter = 0;

const cookieCount = document.querySelector("#clickCounter");
const cookieButton = document.querySelector("#cookieImg");
cookieButton.addEventListener("click", function () {
  console.log("The cookie was clicked");

  //counter++;
  //counter += 1;
  // counter = counter + 1;
  //Declarded inside of the event listener
  // const myCounter = document.querySelector("#click-count");
  // myCounter.textContent = counter;
  // const incCount = document.querySelector("#clickCounter");
  // incCount.textContent = counter;
  cookieButton.append(cookieCount)
});
// cookieCount.append(cookieButton)


