// Write a program to print a fibonacci series upto a given number
// Fibonacci Series
// Definition:The Fibonacci sequence is a series where each number is the sum of the previous two numbers.
// Series starts with:
// 0 1

let n = 10;
let a = 0;
let b = 1;

console.log(a, b);

for(let i = 2; i < n; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}