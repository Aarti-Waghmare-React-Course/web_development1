// Write a program to check Duck Number
// Duck Number Number contains 0 but not at the start)
// Example: 1023

let num = 1023;
let temp = num;
let hasZero = false;

while(temp > 0){
    let digit = temp % 10;

    if(digit === 0){
        hasZero = true;
    }

    temp = (temp - digit) / 10;
}

if(hasZero){
    console.log("Duck Number");
}else{
    console.log("Not Duck Number");
}