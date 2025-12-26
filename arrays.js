// Arrays

var arr = [1, 2, "Arooj", 4, 5];
 console.log(arr);
console.log(arr[2]);

// Iterating arrays can be done with the help of loops.
// Iterating array from vackwork can also be done by loops
// this is practiced in loops.js file

// Array Methods in JS

let myArr = ["Anees", "Arooj", 23, null, true]; // An array can store every type of data whether string, number, boolean etc.
console.log(myArr.length);

myArr.pop();   // It will pop out the last index value. (remove and return)
console.log(myArr); 

myArr.push("Sadia");// it will push the given value to the last index and return array length
console.log(myArr);    

myArr.shift(); // This will also remove and return but the first index value
console.log(myArr);

myArr.unshift("los geht's"); // This will add at the first index value and return array length
console.log(myArr);
                                    /* 
                                    Method	        What it does	                     Changes array?	         Returns

                                    push()	        Adds element(s) to the end  	        ✔ Yes            	New array length
                                    pop()	        Removes last element	                ✔ Yes	            Removed element
                                    unshift()	    Adds element(s) to the beginning	    ✔ Yes	        New array length
                                    shift()     	Removes first element                   ✔ Yes	        Removed element       */

const newLenth= myArr.unshift("besonders"); // unshift() added the given value at the start and returned the new array length. 
console.log("New Array =", myArr, "New Array length =",  newLenth);

console.log(myArr.indexOf("Arooj")); // returns the index if "Arooj"  is found


