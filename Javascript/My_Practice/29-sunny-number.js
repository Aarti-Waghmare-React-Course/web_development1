// Write a program to find sunny number
// Sunny Number = Number whose num + 1 is perfect square
// Example: 8
// 8 + 1 = 9

let num = 8;
let check = num + 1;
let i = 1;

while(i * i <= check){
    if(i * i === check){
        console.log("Sunny Number");
        break;
    }
    i++;
}

if(i * i !== check){
    console.log("Not Sunny Number");
}