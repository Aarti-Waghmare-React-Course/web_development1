// Write a program to check whether a given number is harshad or not.

// If a number is divisible by the sum of its digits, it is a Harshad Number.

let num = 18;
let original = num;
let sum = 0;

while(num > 0){

    let digit = num % 10;

    sum = sum + digit;

    num = (num - digit) / 10;
}

if(original % sum === 0){
    console.log("Harshad Number");
}
else{
    console.log("Not Harshad Number");
}