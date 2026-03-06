// Write a program to find the largest and smallest prime number from 1 to 100

let largest = null;
let smallest = null;

for(let num=2;num<=100;num++){
    let isPrime=true;

    for(let i=2;i<num;i++){
        if(num%i===0){
        isPrime=false;
        break;
    }
}

if(isPrime){
    if(smallest ===null){
        smallest = num;
    }
    largest = num;
}
}
console.log("Smallest Prime : ",smallest);
console.log("Largest Prime: ",largest);