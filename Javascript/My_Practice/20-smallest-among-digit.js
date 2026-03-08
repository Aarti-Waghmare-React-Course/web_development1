// Write a program to find smallest number among the digit , given digit is 53827;

let num = 53827;
let min = 9;   // digits start from 0 - 9

while(num>0){
    let digit = num % 10;
    if(digit<min){
        min = digit;
    }
    num = (num-digit)/10;
}
console.log(min);