// Write a program to find Happy Number
// Happy Number = A Happy Number is a number that becomes 1 after repeatedly replacing it with the sum of the squares of its digits.
// Example: 19

let num = 19;

while(num !== 1 && num !== 4){

    let sum = 0;

    while(num > 0){
        let digit = num % 10;
        sum += digit * digit;
        num = (num - digit) / 10;
    }

    num = sum;
}

if(num === 1){
    console.log("Happy Number");
}else{
    console.log("Not Happy Number");
}