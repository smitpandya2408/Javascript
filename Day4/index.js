// swapping
// let a = 15;

// let b = 10;

//output
//a = 10
// b= 15

// let temp = a;
// a = b;
// b = temp;

// a = a + b; // 25

// b = a - b; // 25 -15

// a = a - b; // 25 - 10 = 15

// Conditional StatmentsLECTURE
// 4.1
// if Statement
// if else Statement
// Nested if else Statement
// min, ,max
// With Console and With Inner- HTML

let studentPercentage = 95;

if (studentPercentage > 200) {
  // true if block execute
  console.log("student will get bike");
} else {
  console.log("else");
}
if (studentPercentage > 90) {
  console.log("student will get car");
} else {
  console.log("pitai");
}

let email = "asd@gmail.com";
let password = "12345";

if (email === "asd@gmail.com") {
  if (password === "12345") {
    console.log("Login Successful");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("Invalid credentials");
}

let a = 100;
let b = 55;
let c = 110;

if (a > b) {
  if (a > c) {
    console.log("a is the largest number");
  } else {
    console.log("c is the largest number");
  }
} else {
  if (b > c) {
    console.log("b is the largest number");
  } else {
    console.log("c is the largest number");
  }
}

// else if ladder

let light = "yellow";

if (light === "red") {
  console.log("Stop");
} else if (light === "yellow") {
  console.log("Slow Down first");
} else if (light === "yellow") {
  console.log("Slow Down second");
} else if (light === "green") {
  console.log("Go");
} else {
  console.log("Invalid color ");
}

let budget = 100;

if (budget > 4000) {
  console.log("taj restuarent");
} else if (budget > 3000) {
  console.log("dominos");
} else if (budget >= 500) {
  console.log("pizza hut");
} else if (budget >= 500) {
  console.log("dhaba");
} else {
  console.log("ghar betho");
}
