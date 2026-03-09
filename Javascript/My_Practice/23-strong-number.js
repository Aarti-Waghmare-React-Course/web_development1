// Write a program to check whether a given number is strong or not

// A number is Strong if:sum of factorial of its digits = number

let num = 145;
let original = num;
let sum = 0;

while(num > 0){

    let digit = num % 10;

    let fact = 1;

    for(let i = 1; i <= digit; i++){
        fact = fact * i;
    }

    sum = sum + fact;

    num = (num - digit) / 10;
}

if(sum === original){
    console.log("Strong Number");
}
else{
    console.log("Not Strong Number");
}