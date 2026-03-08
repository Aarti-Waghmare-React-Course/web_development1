// Write a program to find the largest number among the digit,given digit is 53827

let num = 53827;
let max = 0;

while(num>0){
    let digit = num % 10;
    if (digit>max){
        max = digit;
    }
    num = (num-digit)/10;
}
console.log(max);