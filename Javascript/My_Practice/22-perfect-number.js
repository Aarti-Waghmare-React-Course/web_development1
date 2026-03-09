// Write a program to find whether given number is perfect or not

let num = 6;
let sum = 0;

for(let i =1;i<num;i++){
    if(num%i===0){
        sum = sum + i;
    }
}
if(sum === num){
    console.log("Perfect");
}
else{
    console.log("Not Perfect");
}