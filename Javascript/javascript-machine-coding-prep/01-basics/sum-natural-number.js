// Write a program to find the sum of natural numbers


// Approach 1 --> Using for loop
let num = 50;
let sum = 0;

for(let i=1;i<=num;i++){
    sum = sum +i;
}
console.log(sum);


// Approach 2 --> Using mathematical formula
// --> sum = (n*n)/2

let n = 10;

let result = n*(n+1)/2;

console.log(result);


// Approach 3 --> Using recursion

function output(n){
    if(n === 1){
        return 1;
    }
    return n + output(n-1);
}

console.log(output(10));