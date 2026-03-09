// Write a number to find factors of given number
// Factors are numbers that divide the number exactly.
//24 = 1 2 3 4 6 8 12 24

let num = 24;

for(let i = 1; i<=num; i++){
    if(num %i ===0){
        console.log(i);
    }
}

