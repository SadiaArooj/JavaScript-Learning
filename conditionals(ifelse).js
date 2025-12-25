
// Conditionals in JS

function drive(age){

if (age > 18) {
console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

}

drive(23);
drive(16); 

// if else Ladder
 function grades(numbers) {
  if (numbers >= 80) {
    console.log("Your Grade = A");
  } else if (numbers >= 70) {
    console.log("Your Grade = B");
  } else if (numbers >= 60) {
    console.log("Your Grade = C");
  } else if (numbers >= 50) {
    console.log("Your Grade = D");
  } else {
    console.log("Unfortunately you have failed");
  }
}
grades(93);
grades(80);
grades(72);
grades(69);
grades(54);
grades(46); 
