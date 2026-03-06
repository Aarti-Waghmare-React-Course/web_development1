// Write a program to print only even numbers from 1 to 20

let num = 20;
let result = "";

for(let i=1;i<=num;i++){
    if(i%2===0){
        result = result + i + " ";
    }
}
 console.log(result);