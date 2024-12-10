// 1.Write a JavaScript code snippet that uses arithmetic operators to calculate the area of a circle given its radius. Assume the radius is 7. Display the result using console.log.

let radius = 7;
let pi = 3.14;
let area = pi * (radius * radius);

console.log("area of circle is:", area);

// 2.Given the variables a = 10, b = 20, and c = 5, write a JavaScript code to find the value of (a * b) / c + (b - a). Use console.log to display the result.

let a = 10;
let b = 20;
let c = 5;

console.log("Result is", (a * b) / c + (b - a));

// 3.Given the variables x = 5 and y = 10, use assignment operators to increment x by 2 and multiply y by x. Display the new values of x and y using console.log.

let x = 5;
let y = 10;

console.log("Before x value", x);
x += 2;
console.log("After multiplication of 2", x);

console.log("Before y value", y);

y *= x;
console.log("After multiplication of y", y);

// 4.Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:

// Add 15 to num
// Subtract 5 from num
// Multiply num by 3
// Divide num by 2
// Initialize num to 10, and log the result after each operation.

let num = 10;
num += 15;
num -= 5;
num *= 3;
num /= 2;
console.log("Number final value is", num);

// 5.Given the variables score1 = 85 and score2 = 90, write a JavaScript code using comparison operators to check if both scores are greater than 80 and display the result using console.log.
let score1 = 85;
let score2 = 90;

if (score1 > 80 && score2 > 80) {
  console.log("Student passed in exam");
} else {
  console.log("Student not passed in exam");
}

//6. Write a JavaScript code snippet to compare two strings, "apple" and "banana", using comparison operators to check if the first string is less than the second string. Display the result using console.log.

let string = "apple";
let string2 = "banana";

if (string < string2) {
  console.log("string 2 is less than string");
} else {
  console.log("string is greater than string");
}

// 7.Given age = 25 and hasDrivingLicense = true, use logical operators to write a condition that checks if the person is eligible to drive. Print the result using console.log.

let hasDrivingLicense = 25;
if (hasDrivingLicense >= 25) {
  console.log("hasDrivingLicense");
} else {
  console.log("Not Eligible for DrivingLicense");
}

// 8.Write a JavaScript code snippet that checks if a number is between 10 and 50 (inclusive) or is a multiple of 5 using logical operators. Display the result using console.log.

let num1 = 53;

if ((num1 > 10 && num < 50) || num1 % 5 == 0) {
  console.log("Conditioin true");
} else {
  console.log("Conditioin false");
}

// 9.Write a JavaScript code snippet that converts a string "123.45" to a number and adds 10 to it. Display the result using console.log.

let num4 = "123.45";
console.log(num4 + 10);

// 10.Write a JavaScript code snippet to convert a boolean value true to a string and concatenate it with " is the value". Use console.log to display the result.

let boolean = true;
console.log(boolean + " is true");

// 11.Write a JavaScript code snippet that updates the content of a <div> with id output to show the result of 15 * 3 using innerHTML.

//12.Write a JavaScript code snippet that uses console.log to display the values of variables a = 5, b = 10, and the result of their addition.

//13.Write a JavaScript code snippet that checks if a given number is positive. Use an if statement and display the result using console.log.

let number1 = 5;

if (number1 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// 14.Given the variable temperature = 30, write an if statement that checks if the temperature is above 25. If true, log "It's a hot day" to the console.

let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day");
} else {
  console.log("It's a cold day");
}

// 15.Write a JavaScript code snippet that checks if a number is positive, negative, or zero using nested if-else statements. Display the appropriate message using console.log.

let positive = -6;

if (positive > 0) {
  console.log("positive number");
} else {
  if (positive < 0) {
    console.log("negative number");
  } else {
    console.log("The number is zero");
  }
}

// 16.Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:

// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.

let marks = 81;

if (marks > 90) {
  console.log("A Grade");
} else if (marks > 80 && marks < 89) {
  console.log("B Grade");
} else if (marks > 70 && marks < 79) {
  console.log("C Grade");
} else {
  console.log("D Grade");
}

let number = 12;

if (number % 2 === 0 && number > 10) {
  console.log("The number is both even and greater than 10.");
} else {
  console.log("The number is either not even or not greater than 10.");
}

// 19.Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment, and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. Log the result.

let number5 = 8;
let num2 = 3;

// Increment num1 by 1
number5++;

// Check if num1 is a multiple of num2
if (number5 % num2 === 0) {
  console.log("num1 is a multiple of num2 after incrementing.");
} else {
  console.log("num1 is not a multiple of num2 after incrementing.");
}

// 20.write a JavaScript code snippet that checks if a given variable age is either less than 18 or greater than 60 using logical operators, and displays the message "Not eligible" using console.log. If neither condition is met, display "Eligible".
let age = 25; // Example age, you can change this to test different values

if (age < 18 || age > 60) {
  console.log("Not eligible");
} else {
  console.log("Eligible");
}
