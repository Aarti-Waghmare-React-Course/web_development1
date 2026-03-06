// Write a program to Check whether a number is prime or not
// A prime number is a number which is greater than 1 and has only two factors 1 and the number itself.

let num = 15;
let isPrime = true;

if(num<=1){
    isPrime = false;
}

for(let i=2;i<num;i++){
    if(num%i===0){
        isPrime = false;
    }

}

if(isPrime){
    console.log("Prime")
}
else{
    console.log("Not Prime");
}