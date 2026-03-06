// 🔥 Challenge: Prime + FizzBuzzPop Combined
// From 1 to 50:
// Rules:
// If number is prime → print "Prime"
// If divisible by:
// 3 → "Fizz"
// 5 → "Buzz"
// 7 → "Pop"
// If both prime and divisible case happen (example: 3, 5, 7 are prime AND divisible by themselves) → print combination
// Example:
// 3 → "PrimeFizz"
// 5 → "PrimeBuzz"
// 7 → "PrimePop"
// If none apply → print number.
// Output horizontal in one line.

let num = 50;
let result = "";

for(let i = 1; i <= num; i++){

    let isPrime = true;

    if(i <= 1){
        isPrime = false;
    }

    for(let j = 2; j * j <= i; j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
    }

    let output = "";

    if(isPrime) output += "Prime";
    if(i % 3 === 0) output += "Fizz";
    if(i % 5 === 0) output += "Buzz";
    if(i % 7 === 0) output += "Pop";

    result += (output || i) + " ";
}

console.log(result);