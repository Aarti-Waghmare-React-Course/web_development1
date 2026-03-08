// Write a program to check whether a number is armstrong or not

let num = 153;
let original = num;
let sum = 0;
let count = 0;

// count digits
while(num>0){
    let digit = num % 10;
    count = count + 1;
    num = (num-digit)/10;
}

// reset digit
num = original;

// calculate armstrong
while(num>0){
    let digit = num % 10;
    sum = sum + (digit ** count);
    num = (num-digit)/10;
}

if(sum === original){
    console.log("Armstrong")
}
else{
    console.log("Not Armstrong");
}