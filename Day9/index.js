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

//splice

// let dataofnumbers = [24, 28, 25, 30, 31, 32, 33, 34, 35, 36, 37];
// let string2 = "javascript";
// dataofnumbers.splice(3, 4, "hello", "smit pandya");
// console.log(dataofnumbers);

//slice
// let dataofnumbers = [24, 28, 25, 30, 31, 32, 33, 34, 35, 36, 37];
// let result = dataofnumbers.slice(0, 2);
// console.log(result);

//mapping
// let datauser = ["smit", "Dhruv", "Raj", "Om"];
// first map create new array internally
// second update element in new array
// third return new array

// let result = datauser.map((element) => {
//   return element + " " + "Pandya";
// });

// console.log(result);

// filter
// let numbersData = [12,14,15,17,18,19,20,21,22,23,24,25]

// const storeNumbers = numbersData.filter((element)=>{
//   return element > 20
// })

// console.log(storeNumbers);

// for each
// let sum = 0;
// const storeForEach = numbersData.forEach((element) => {
//   console.log(element);
//   sum += element;
// });
// console.log(sum);
// console.log(storeForEach);

//findIndex

// const newValue = numbersData.indexOf(24)
// console.log(newValue)

// const findIndex = numbersData.findIndex((element)=>element>24)

// console.log(findIndex)

//includes
// let techStack = [
//   "react",
//   "node",
//   "html",
//   "css",
//   "mongodb",
//   "vercel",
//   "netlify",
//   "javascript",
// ]; //["node","node","node","css"]

// const resultStack = techStack.includes("css");

// console.log(resultStack);

//every
// const storeEvery = techStack.every((element) => {
//   return element == "node";
// });
// console.log(storeEvery);

//some
// const storeSome = techStack.some((element) => {
//   return element == "javascript";
// });
// console.log(storeSome, "some");

let reduceData = [10, 20, 30, 40, [1, 2, 3, [6, 15, [1, 2, 33]]]];

const storeReduceData = reduceData.reduce((acc, element) => {
  if (typeof element == "number") {
    acc = [...acc, element];
  } else {
    acc = [...acc, ...element];
  }

  return acc;
}, []);

console.log(storeReduceData, "flat");
