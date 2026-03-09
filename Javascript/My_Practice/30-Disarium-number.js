// Write a number to find disarium number
// Disarium Number = Sum of digits powered by their positions)
// Example: 135

let num = 135;
let temp = num;
let count = 0;
let sum = 0;

// count digits
while(temp > 0){
    temp = (temp - (temp % 10)) / 10;
    count++;
}

temp = num;

while(temp > 0){
    let digit = temp % 10;
    sum += digit ** count;
    count--;
    temp = (temp - digit) / 10;
}

if(sum === num){
    console.log("Disarium Number");
}else{
    console.log("Not Disarium Number");
}