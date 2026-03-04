// Write a program to check a number is a positive , negative or zero

// Approach 1  -->  Using Switch Statement

function numberChecking(num) {
    switch (Math.sign(num)) {
        case 1:
            console.log("The number is Positive");
            break;
        case -1:
            console.log("The number is Negative");
            break;
        default:
            console.log("The number is Zero");
    }
}

numberChecking(19);
// Output: Positive
numberChecking(-4);
// Output: Negative
numberChecking(0);
// Output: Zero


// Approach 2 --> Using if-else Statements

const number = 7; 

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}


// Approach 3 --> Using Ternary Operator

function checkNumberSign(number) {
  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    const result =
      number === 0 ? "The number is zero." :
      number > 0 ? `${number} is positive.` : `${number} is negative.`;

    console.log(result);
  }
}

checkNumberSign(7);


// Approach 4 --> Using Math.abs()
function checkNumberSign(number) {
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (number === 0) {
            console.log("The number is zero.");
        } else if (number === Math.abs(number)) {
            console.log("The number is positive.");
        } else {
            console.log("The number is negative.");
        }
    }
}

// Test cases
checkNumberSign(5);     // Output: The number is positive.
checkNumberSign(-7);    // Output: The number is negative.
checkNumberSign(0);     // Output: The number is zero.