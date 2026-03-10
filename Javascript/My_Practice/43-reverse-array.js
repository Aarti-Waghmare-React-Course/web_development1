// Write a program to reverse an array

// Approach 1
let arr = [1,2,3,4,5];

for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
}

// Approach 2
let arr1 = [1,2,3,4,5];
let reversed = [];

for(let i = arr1.length-1; i >= 0; i--){
    reversed.push(arr1[i]);
}

console.log(reversed);