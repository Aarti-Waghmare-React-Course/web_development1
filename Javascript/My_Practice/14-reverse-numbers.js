// Write a program to Reverse a number
// Example:
// Input: 12345
// Output: 54321
// No string methods.
// Only math + loop.

let num = 12345;
let reverse = 0;

while(num > 0){

    let digit = num % 10;

    reverse = reverse * 10 + digit;

    num = Math.floor(num / 10);
}

console.log(reverse);

// Approach 2
let num1 = 12345;
let reverse1 = 0;

while(num1 > 0){

    let digit1 = num1 % 10;      // get last digit
    reverse1 = reverse1 * 10 + digit1;  

    num1 = (num1 - digit1) / 10;  // remove last digit
}

console.log(reverse1);