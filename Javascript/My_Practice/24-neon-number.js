// Write a program to check whether given number is neon or not

// A number is Neon if:sum of digits of (number²) = number

let num = 9;
let square = num * num;
let sum = 0;

while(square > 0){

    let digit = square % 10;

    sum = sum + digit;

    square = (square - digit) / 10;
}

if(sum === num){
    console.log("Neon Number");
}
else{
    console.log("Not Neon Number");
}