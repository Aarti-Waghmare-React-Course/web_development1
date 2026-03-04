// write a program to swap two numbers


// Approach 1 -->  Using destructing Assignment

let a = 70;
let b = 200;

console.log(`before swap a= ${a}`);
console.log(`before swap b= ${b}`);

// a would be swapped to b and b would be swapped to a
[b, a] = [a, b];

console.log(`after swap a= ${a}`);
console.log(`after swap b= ${b}`);


// Approach 2 -->Using Temporary variable
let a1 = 18;
let b1 = 21;
let temp;

console.log(`before swapping: a1= ${a1}`);
console.log(`before swapping b1= ${b1}`);

temp = a1;
a1 = b1;
b1 = temp;

console.log(`after swapping a1= ${a1}`);
console.log(`after swapping b1= ${b1}`);


//Approach 3 --> Using Arithmetic Operations
let a2 = 10;
let b2 = 20;

console.log(`before swap a2= ${a2}`);
console.log(`before swap b2= ${b2}`);

a2 = a2 + b2;//10=10+20 now a would be 30
b2 = a2 - b2;//20=30-20 now b would be 10
a2 = a2 - b2;//30=30-10 so a would be now 20

console.log(`after swap a2= ${a2}`);
console.log(`after swap b2= ${b2}`);


// Approach 4 --> Using XOR Bitwise Operator
let a3 = 5;
let b3 = 10;

console.log("Before swapping: a3 =", a3, "b3 =", b3);

a3 = a3 ^ b3;
b3 = a3 ^ b3;
a3 = a3 ^ b3;

console.log("After swapping: a3 =", a3, "b3 =", b3);