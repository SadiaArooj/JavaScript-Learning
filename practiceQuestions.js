// Question 1: Create a game where you start with any game number and then ask the user to keep guessing
//  a random number between 1-25 until the user guessed the right number.

//let gameNum = 10;
/*  let userNum;

do {
  userNum = prompt("Guess the game number between 1 to 25");
} while (userNum != gameNum);

console.log("Congratulations you guessed the right number");
 */

/* let userNum = prompt("Enter a number between 1-25");

while(gameNum != userNum) {
userNum = prompt ("You entered wrong number. Try again");
}
console.log("Congratulations. you entered the right number"); */

// Question 2: Prompt the user to enter their full name. Generate a user name for them based on input.
//  Starting with @ and ending with the length of user name e.g SadiaArooj --> @SadiaArooj 10

/* let  userName = prompt("Enter you name without spaces");
let newName = "@" + userName + userName.length ;
console.log("New Name will become:", newName); */

// Question 3: Create a Toggle ( 1->2 and 2->1 just like reversible reactions. This is called Toggling) button that changes the
// screen to dark mode when clicked and light mode when clicked again.
let changeMode = document.querySelector("#modeColor");
let currMode = "light";
changeMode.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
