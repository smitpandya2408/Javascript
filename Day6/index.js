// // Understanding Functions
// // Parameters Function (with Arguments)
// // return type in Function

// function show() {
//   console.log("Hello world");
// }

// show();

let a = 15;
let b = 20;

// function add(a, b) {
//   console.log("Sum of a and b :", a + b);
// }

// add(a, b);

// function sub(a, b) {
//   return a - b;
// }
// let subtraction = sub(a, b);
// console.log("Sub : ", subtraction);

// let i = 1;

// for (i; i < 10; i++) {
//   if (i == 5) {
//     //  break;
//     continue;
//   }
//   console.log(i);
// }

// console.log(111 + +"12345");

// // function recursion(a) {
// //   if (a == 0) {
// //     return;
// //   } else {
// //     console.log(a);
// //     recursion(a - 1);
// //   }
// // }

// // recursion(5);

function add(a, b) {
  return a - b;
}
// s

function sub(a, b) {
  return a - b;
}
// let subtraction = sub(a, b);
// console.log("Sub : ", subtraction);

function mul(a, b) {
  return a - b;
}
// let mul = sub(a, b);
// console.log("Sub : ", mul);

function div(a, b) {
  return a - b;
}
// let div = sub(a, b);
// console.log("Sub : ", div);

let Option = 1;
switch (Option) {
  case 1:
    let addition = add(a, b);
    console.log("addition : ", addition);
    break;
  //   case 2:
  //     let subtraction = sub(a, b);
  //     console.log("Sub : ", );
  //     break;
  case 3:
    let mul = mul(a, b);
    console.log("Sub : ", mul);
    break;
  case 4:
    let div = div(a, b);
    console.log("Sub : ", div);
    break;

  default:
    console.log("please select valid numbers");
    break;
}
