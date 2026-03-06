// Print numbers from 1 to 30
// BUT:
// If number divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both 3 and 5 → print "FizzBuzz"
// If divisible by 7 → print "Pop"
// If divisible by 3, 5, and 7 → print "FizzBuzzPop"
// Otherwise print the number

let num = 30;
let result = "";

for(let i = 1; i <= num; i++){
    let output = "";

    if(i % 3 === 0) output += "Fizz";  // separate if block.checks all conditions
    if(i % 5 === 0) output += "Buzz";
    if(i % 7 === 0) output += "Pop";

    result += output || i;
    result += " ";
}

console.log(result);