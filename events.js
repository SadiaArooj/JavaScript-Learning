function clicked() {
  console.log("The button was clicked");
}

const btn = document.getElementById("firstButton");
btn.addEventListener("click", function () {
  btn.textContent = "Clicked!";
});
