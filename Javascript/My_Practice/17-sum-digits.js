// Write a program to find the sum of digits ,given digit is 54789

let num = 54789;
let sum = 0;

while(num>0){
    let digit = num % 10;
    sum = sum + digit;
    num = (num-digit)/10;
}
console.log(sum);