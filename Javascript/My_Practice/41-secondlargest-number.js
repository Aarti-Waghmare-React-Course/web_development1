// Write a program find second largest number from an array

let arr = [12,45,7,89,23];

let largest = arr[0];
let secondLargest = arr[0];

for(let i = 1; i < arr.length; i++){

    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    }

    else if(arr[i] > secondLargest){
        secondLargest = arr[i];
    }

}

console.log(secondLargest);