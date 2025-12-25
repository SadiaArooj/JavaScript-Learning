
// Iterating an Array
// For Loop

var arr2 = [1, 2, 3, 4, 5];
for (var i=0; i<arr.length; i++){
    if(i==2){
        continue;  // if the condition is true then it will only skip that value and then continue with the rest
        //break;  // if the condition is true then it will break the loop  there.
    }
    console.log(arr[i])
}

arr.forEach(function (element) { // forEach is used for getting every element of the array here. 
   console.log(element);         // I have used arr values here and not arr2.
});

// while loop
 j=0;
while(j<arr2.length){
    console.log(arr2[j])
    j++
}

//do while loop

 j = 0;
do {
  console.log(arr[j]);
//     if (j == 1) {
//     break;
//   }
  j++;
} while (j < arr.length);

