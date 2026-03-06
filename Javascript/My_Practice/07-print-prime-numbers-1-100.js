// Write a program to check prime numbers from 1 to 100 in horizontal

let result = "";

for(let num=1;num<=100;num++){
    let isPrime = true;

    if(num<=1){
        isPrime=false;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            isPrime=false;
            break;
        }
    }
   if(isPrime){
    result=result+num+" ";
   }
}
console.log(result);