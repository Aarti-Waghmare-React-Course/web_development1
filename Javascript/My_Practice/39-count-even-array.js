// Write a program to print even count of array elements

let arr = [1,2,3,4,5];
let count =0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        count =count + 1;
    }
}
console.log(count);