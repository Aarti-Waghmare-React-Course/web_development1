//  Find the sum of all even numbers between 1 and 50

let num = 50;
let sum = 0;

for(let i=1;i<=50;i++){
    if(i%2===0){
        sum=sum + i;
    }
}
console.log(sum);