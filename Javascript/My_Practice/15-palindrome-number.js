// Write a program to check whether a given number is palindrome or not

let num = 121;
let original = num;
let reverse = 0;

while(num>0){
    let digit = num % 10;   
    reverse = reverse * 10 + digit;
    num = (num - digit)/10;
}
if(original===reverse){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}