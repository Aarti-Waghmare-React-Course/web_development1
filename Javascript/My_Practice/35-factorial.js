// Write a program to find factorial of a number
// Factorial of a number means:
// n! = n × (n-1) × (n-2) ... × 1

let num = 5;
let fact = 1;

for(let i =1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);