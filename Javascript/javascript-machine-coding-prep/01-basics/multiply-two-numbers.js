// 03 : Write a program to print multiplication of two numbers

// Approach 1 --> Using * operand
let a = 10;
let b = 20;
let result = a*b;

console.log("Result:",result);


//Approach 2 --> Using Function

function multiplynum(a,b){
    return a*b;
}


let a1 = 12;
let b1 = 10;
let result1 = multiplynum(a1,b1);

console.log("Multiplication of two numbers is :",result1);


// Approach 3 --> Using Arrow Function

let a2 = 6;
let b2 = 11;

let result2 = (a2,b2)=>a2*b2;
console.log("Multiplication of two numbers is :", result2(a2,b2));



// Approach 4 --> Using Multiplication Assignment Operator
//Multiplication Assignment Operator (*=) multiplies a variable by a value and assigns the result back to the same variable.
let a3 = 12;
let b3 = 11;

a3 *= b3;

console.log("Multiplication result is:" , a3);


// Approach 5 --> Using For Loop

// Function for multiplication
function multiply(a, b) {
    let result3 = 0;
    for (let i = 1; i <= b; i++) {
        result3 += a;
    }
    return result3;
}

// Calling function and storing the returned value
let result3 = multiply(5, 10); // 50

// Display the result
console.log(result3);