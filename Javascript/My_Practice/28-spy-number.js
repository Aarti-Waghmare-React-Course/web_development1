// Write a program to find spy number

// Spy Number = Sum of digits = Product of digits

let num = 1124;
let temp = num;
let sum = 0;
let product = 1;

while(temp > 0){
    let digit = temp % 10;

    sum += digit;
    product *= digit;

    temp = (temp - digit) / 10;
}

if(sum === product){
    console.log("Spy Number");
}else{
    console.log("Not Spy Number");
}