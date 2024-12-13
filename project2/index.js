// 1.Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15.

// for (i = 0; i <= 15; i++) {
//   if (i % 2 === 0 || i % 5 === 0) {
//     console.log(`${i}`);
//   }
// }

// 2.Write a for loop to print the multiplication table of a given number up to 10. For example, for the number 3, it should print: // Output: // 3 x 1 = 3 // 3 x 2 = 6

// for (let i = 1; i <= 10; i++) {
//   console.log(`3 * ${i}`, 3 * i);
// }

// 3.pattern

// for (let i = 1; i <= 4; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// 4.perfect numbers
let number = 28; // The number to check
let sumOfDivisors = 0;

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    sumOfDivisors += i;
  }
}

if (sumOfDivisors === number) {
  console.log(number + " is a perfect number.");
} else {
  console.log(number + " is not a perfect number.");
}
