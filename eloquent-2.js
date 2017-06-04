eloquentjavascript

/* Looping a triangle

var hash ="";
for (var i =1;i<8;i++) {
hash += "#";
console.log(hash);
}

*/


/* FizzBuzz

for (i=1; i<=100;i++){
if (i % 3 === 0) {
console.log("Fizz");
} else if (i % 5 === 0){
console.log("Buzz");
} else if (i % 3 ===0 && i % 5 ===0){
console.log("FizzBuzz");
} else {
console.log(i);
}
}

*/

/* Chess board

var size = 8; 
var space = "";

for (var i = 0; i < size; i++) {  
  for (var j = 0; j< size; j++) {
    if ((i + j) % 2 == 0)
      space += " ";
    else
      space += "#";
  }
  space += "\n";
}

console.log(space);

*/
