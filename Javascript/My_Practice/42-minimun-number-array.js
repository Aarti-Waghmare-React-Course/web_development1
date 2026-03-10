// Write a program to find minimum number from array


let arr = [12,45,7,89,23];
let min = arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(min);