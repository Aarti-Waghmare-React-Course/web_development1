// Write a program for GCD of given number
//The largest number that divides two numbers exactly.
//  12 , 18
// 12 → 1 2 3 4 6 12
// 18 → 1 2 3 6 9 18
// 1 2 3 6
// Largest = 6 ,So GCD = 6

let a = 12;
let b = 18;

while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
}

console.log(a);