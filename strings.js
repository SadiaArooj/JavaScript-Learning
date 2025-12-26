let myStr = "Wir gehen huete zum Tierpark , zum";
console.log(myStr.length);
console.log(myStr.indexOf("zum")); // gives the very first index of string if value is found i.e 16 here
console.log(myStr.lastIndexOf("zum")); // returns last index i.e 31 in this case
console.log(myStr.slice(0,10)); // it will give the string after slicing the string from 0-10 index. (It will not affect the original string)

//console.log(myStr.replace("Wir","Ich und mein Mann"));

newstr = myStr.replace("Wir","Ich und mein Mann");

console.log(myStr , newstr);