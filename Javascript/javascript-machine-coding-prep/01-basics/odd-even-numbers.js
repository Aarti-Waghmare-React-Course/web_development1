// 04 : Write  a program to check whether a given number is odd or even

// Approach 1 --> Using Modulo Operator

function isEvenOdd(n){
    return(n%2==0)
}
let n = 109;
isEvenOdd(n)? console.log("Even"):console.log("Odd");



// Approach 2 --> Using Bitwise & Operator

function checkOddOrEven(n1) {
    if (n1 & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}

console.log(checkOddOrEven(12));
console.log(checkOddOrEven(121));


//Approach 3  --> Using Bitwise OR Operator (|)

function checkOddOrEven(number) {
    return (number | 1) === number ? 'Odd' : 'Even';
}

console.log(checkOddOrEven(18));
console.log(checkOddOrEven(21));


//Approach 4 --> Using if...else Statement

let num = 5;

if (num % 2 ===0){
    console.log("The number is Even");
}
else{
    console.log("The number is Odd");
}


//Approach 5 --> Using the Ternary Operator

let num1 = 12;
let result1 = (num1 % 2 === 0) ? "The number is Even" : "The number is odd";

console.log(result1);