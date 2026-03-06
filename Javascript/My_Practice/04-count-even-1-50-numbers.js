// Count how many even numbers exist between 1 and 50.Print only counts

let num = 50;
let count =0;

for(let i=1;i<=num;i++){
    if(i%2===0){
        count = count + 1;
    }
}
console.log(count);