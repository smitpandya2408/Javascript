// 1.Write a JavaScript program using a for loop that prints all even numbers from 1 to 50.

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// 2.Write a JavaScript program using a for loop that prints the multiplication table for the number 5 (from 1 to 10).

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i}`, 5 * i);
// }

// 3.Using a for loop, create a program that calculates the factorial of a given positive integer n.

// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }

// console.log("Factorial is ", fact);

// 4.Write a JavaScript program that uses a for loop to print numbers from 1 to 100, but for multiples of 3, print “Fizz” instead of the number, and for multiples of 5, print “Buzz.”

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log(`${i} Fizz`, i);
//   }
//   if (i % 5 == 0) {
//     console.log(`${i} Buzz`, i);
//   }
// }

// 5.Using a for loop, create a program that calculates the sum of all numbers from 1 to 100.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log("1 TO 100 numbers of sum is", sum);

//6 Write a for loop that prints the cube of all numbers from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} cube is `, i * i);
// }

//7.Write a for loop that prints the sum of squares of all odd numbers from 1 to 20.

// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 != 0) {
//     sum += i * i;
//   }
// }
// console.log(`sum of 1 to 20 : ${sum}`);

// 8.Write a for loop that calculates and prints the sum of all numbers divisible by 3 between 1 and 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     sum += i;
//   }
// }
// console.log(`sum of 1 to 20 : ${sum}`);

// 9.Using a for loop, write a program that calculates the product of all numbers from 1 to 10.

// let product = 1;

// for (let i = 1; i <= 10; i++) {
//   product *= i;
// }
// console.log("The product of all numbers from 1 to 10 is:", product);

// 10.Write a JavaScript program using a while loop that prints all numbers from 10 to 1 in reverse order.

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//11. Write a while loop that keeps doubling a number starting from 1 until the number exceeds 1000, and then prints the final value.

// let number = 1;

// while (number <= 1000) {
//   number *= 2;
// }

// console.log("The final value is:", number);

// 12.Using a while loop, create a program that finds and prints the first 5 numbers divisible by both 3 and 7.

// let sum = 0;
// let number = 2;

// while (number <= 100) {
//   sum += number;
//   number += 2;
// }

// console.log("The sum of all even numbers between 1 and 100 is:", sum);

// 13.Using a while loop, create a program that finds and prints the first 5 numbers divisible by both 3 and 7.

let count = 0;
let number = 1;

while (count < 5) {
  if (number % 3 === 0 && number % 7 === 0) {
    console.log(number);
    count++;
  }
  number++;
}

// 14.Write a JavaScript program using a do-while loop that prints numbers from 1 to 10. The loop should run at least once, regardless of the condition.

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
