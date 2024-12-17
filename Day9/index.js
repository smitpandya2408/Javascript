// // Understanding Array
// // Array Functions
// // Push ,Pop, shift, upshifts, Splice, map ,filter, foreach, indexof, findindex ,includes, every, some,reduce
// // Understanding String
// // String Function
// // substr, substring, join, trim

// let array = [1, 2, 3, 4, 5, 6];

// console.log(array);
// let array2 = [45, 65, 7, 6, 7, 6, ...array]; //spread operator  []   [1, 2, 3, 4, 5]== > [1,2,3,4,5] // Rest operator
// // console.log(...array)
// console.log(array2);
// console.log(array == array2);

// function show(a, b, ...num) {
//   // rest operator
//   console.log(a);
//   console.log(b);
//   console.log(num);
// }
// show(1, 2, 3, 4, 5);

// let store = [1, 2];
// let result = store;
// store.push("55");
// console.log(store);
// const getFromStore = store.push("hi from push");
// console.log(getFromStore);

// let arr = [1, 2, 3, 4, 5, 6, 0, 7];

// arr.unshift("staring ");
// console.log(arr);

// arr.shift();
// console.log(arr);

// let string = "java";
// for (let i = 0; i < string.length; i++) {
//   string[i] = 23;
// }
// console.log(string);

// function sum(a, b) {
//   return a + b;
// // }

// function calculate(a, b, callback) {
//   console.log(callback(a, b));
// }

// calculate(5, 10, sum);

// let month = ["jan", "march", "april", "june"];
// month.splice(1, 0, "feb");
// console.log(month);

// let map1 = new Map();
// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);
// console.log(map1.get("a"));

let words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

console.log(words.indexOf("spray"));
console.log;

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
