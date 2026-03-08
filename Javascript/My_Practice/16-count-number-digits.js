// Write a program to count number of digits,given digit is 54789

let num = 54789;
let count = 0;

while(num>0){
    let digit = num % 10;
    num = (num-digit)/10;
    count = count + 1;
}

console.log(count);