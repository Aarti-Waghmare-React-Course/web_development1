// 02- Write a program to add two numbers

// Approach 1 --> Using + operator

let num1 = 12;
let num2 = 10;
let sum = num1 + num2;
console.log("Sum :",sum);


// Approach 2 --> Using function

function addfunc (a,b){
    return a+b;
}

let num3 = 5;
let num4 = 8;
let sum1 = addfunc(num3,num4);
console.log("Sum of given numbers is :",sum1);


// Approach 3 --> Using Arrow Function

let addition = (a1,b1)=> a1+b1;

let num5 = 6;
let num6 = 17;
let sum2 = addition(num5,num6);
console.log("Sum of given numbers is:",sum2);


// Approach 4 --> Using Addition Assignment (+=) Operator

let num7 = 15;
let num8 = 10;

// Equivalent to num1 = num1 + num2
num7 += num8;
console.log("Sum of the given number is :", num7);
