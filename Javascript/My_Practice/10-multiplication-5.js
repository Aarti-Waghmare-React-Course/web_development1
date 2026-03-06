// Write a program to print multiplication table of 5

let num = 10;
let result = "";

for(let i=1;i<=num;i++){
    let multiply = 5*i;
    result = result + multiply + " ";
}
console.log(result);



// Approach 2

let num1=50;
let result1 = "";

for(let i=5;i<=50;i++){
    if(i%5===0)
     result1 = result1 + i +" ";
}
console.log(result1);