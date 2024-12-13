// Function with four ways
// Recursion
// Nested Functions
// Closure concepts
// variables as a Function expression
// arrow Function
// IIFE(Immediately Invoked Function Expressions)

// IIFE(Immediately Invoked Function Expressions)
(function () {
  console.log("IIFE(Immediately Invoked Function Expressions");
})();

//normal function

// arrow function
// anonymous function

// variable function

// let show = function () {
//   console.log("It is a variable function");
// };

// let show1 = () => {
//   console.log("It is a arrow function");
// };

//nested function
// let outer = () => {
//   console.log("hello from outer function");
//   let inner = () => {
//     console.log("hello from inner function");
//   };

//   inner();
//   console.log("hello from outer function");
// };

// outer();

let outer = () => {
  console.log("hello from outer function");
  function inner() {
    console.log("hello from inner function");
  }

  return inner;
};

const innerVar = outer();

innerVar();

//pure function
let add = (a, b) => {
  return a + b;
};

console.log(add(2, 3));

console.log(add(5, 7));
console.log(add(50, 70));

//let var const

// var Concept
var userName = "batman";
var userName = "superman";
userName = "robin";
//global scope var create variable on global scope
//  let flower = "puspa"

{
  //block scope
  var flower = "puspa";
}

console.log(flower);

//let concept
// var game = "freefire"
let game = "pubg";
game = "clash of clan";
// var game = "freefire"

// const object

// const value = Math.random()*1000
// const value = Math.floor(Math.random()*1000)
// const value2 = Math.ceil(Math.random()*1000)
const value = Math.floor(45.60389545);
const value2 = Math.ceil(45.60389545);
console.log(value);
console.log(value2);
// console.log(object)
