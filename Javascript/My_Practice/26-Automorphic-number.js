// Write a program to check whether a given number is automorphic
// Number whose square ends with the number. Example: 25 → 625

let num = 25;
let square = num * num;
let temp = num;

while(temp > 0){
    if(temp % 10 !== square % 10){
        console.log("Not Automorphic");
        break;
    }

    temp = (temp - (temp % 10)) / 10;
    square = (square - (square % 10)) / 10;
}

if(temp === 0){
    console.log("Automorphic Number");
}