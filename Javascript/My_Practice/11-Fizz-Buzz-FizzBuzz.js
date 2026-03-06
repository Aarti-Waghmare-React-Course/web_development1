
// Print numbers from 1 to 30
// BUT:
// If number divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both 3 and 5 → print "FizzBuzz"
// Otherwise print the number

let num = 30;
let result = "";

for(let i=1;i<=30;i++){
    if(i%3===0 && i%5===0){
        result = result + "FizzBuzz" + " ";
    }
    else if(i%3===0){
        result = result + "Fizz" + " ";
    }
    else if(i%5===0){
        result=result + "Buzz" +" ";
    }
    else{
        result = result + i + " ";
    }
}
console.log(result);