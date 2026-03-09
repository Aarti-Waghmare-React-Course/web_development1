// Write a program to find LCM of given numbers
// The smallest number divisible by both numbers.
// 12 , 18
// Multiples:
// 12 → 12 24 36 48
// 18 → 18 36 54
//  Common multiple: 36
// Smallest → LCM = 36

let a = 12;
let b = 18;

let max = (a > b) ? a : b;

while(true){

    if(max % a === 0 && max % b === 0){
        console.log(max);
        break;
    }

    max++;
}
