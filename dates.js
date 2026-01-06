const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
// 1st way by making an updateClock Function and then passing it to setInterval();
/* function updateClock(){
a = new Date();  // Get the NEW current time every time the function runs
let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds(); // In time format
let date = a.toLocaleDateString("en-US",options); 
document.getElementById("time").innerHTML = time + " on " + date; // DOM
}
setInterval(updateClock, 1000); */

// 2nd way is by using the setInterval() function itself
setInterval(() => {
  a = new Date(); // Get the NEW current time every time the function runs
  let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds(); // In time format
  let date = a.toLocaleDateString("en-US", options);
  document.getElementById("time").innerHTML = time + " on " + date; // DOM
}, 1000);
