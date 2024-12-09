// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

// Arithmetic operators

let a = 20;
let b = 10;

console.log("Addition of a and b", a + b);
console.log("Subtraction of a and b", a - b);
console.log("Multiplication of a and b", a * b);
console.log("Division of a and b", a / b);

// Assignment operators

let c = 10;
let sum = 5;
console.log("Before addition sum value", sum);
sum += 10;

console.log("After addition sum value", sum);

sum = 3;
sum **= 3;
console.log(sum, "exponent"); //power of number

console.log(!!!true); //it is give you a opposite value

// comparision operator
// >
console.log(45 > 5);
// <
console.log(45 < 5);
// >=
console.log(15 >= 45);
// <=
console.log(15 <= 45);
// !=
console.log(45 != 45);
// ==
console.log(45 == 45);
//===
console.log("45" === 45); //strickly type check
//!==
console.log("45" != 45);

// Logical operators
// &&  and  return always false values false and comparision
// ||  or    return always true values false and comparision

console.log(45 > 6 && 55 < 76 && 3 < 45 && 44 == 44, "logical of &&");

console.log(45 < 6 || 55 > 76 || 3 < 45 || 44 != 44, "logical of ||");

console.log(
  123 < 6 || (345 > 25 && 23 < 534) || (45 != 45 && 55 > 26 && 45),
  "logical of"
);

//converstion

let string = "1a23";
console.log(typeof string);
string = Number(string);
console.log(string);

//explicit
let boolean = true;
boolean = Number(boolean);
console.log(boolean);

let number2 = -45;
number2 = Boolean(number2);
console.log(number2);

//implicit conversion
let number3 = 0;
number3 = Boolean(number3);
console.log(number3);

console.log("123a" - 5); // implicit
console.log("1111" + (1111 + 2222)); //concatenate 111111112222
console.log(222 + (333 + "123") + 333); //555123333

console.log("" && true && 0 && 1);

let string2 = "         ";

console.log(Number(string2));
