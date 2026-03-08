// Write a program to find the product of a digit and given digit is 234

let num = 234;
let product = 1;

while(num>0){
    let digit = num % 10;
    product = product * digit;
    num = (num-digit)/10;
}
console.log(product);