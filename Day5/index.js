//swithcase

let day = 3;
switch (day) {
  case 1:
    day = "Sunday";
    break;

  case 2:
    day = "Monday";
    break;

  case 3:
    day = "Tuesday";
    break;

  case 4:
    day = "Wednesday";
    break;

  case 5:
    day = "Thursday";
    break;

  case 7:
    day = "Friday";
    break;
}

console.log(day);

//for loop

let i = 0;

for (i = 1; i <= 5; i++) {
  console.log("The number Of i :", i);
}

//for in loop

let person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
  console.log(person[x]);
}

//for of

// let cars = ["BMW", "Volvo", "Mini"];
// for (let y of cars) {
//   console.log(cars[y]);
// }

// for (let i = 1; i <= 5; i++) {
//   let a = "";
//   for (let j = 1; j <= i; j++) {
//     a += "j";
//   }
//   console.log(a + 1);
// }

let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

for (let n = 1; n <= rows; n++) {
  for (let num = 1; num <= n; num++) {
    pattern += num;
  }

  pattern += "\n";
}
console.log(pattern);
