// JS Objects
// Object Property
// Object Methods
// Object with Array
// Objects Looping
// Make Quotes

const student = {
  studentname: "batman",
  age: 30,
  city: "gotam",
  subject: ["maths", "science", "react", "html"],

  print: function () {
    console.log(`hello from  ${this.studentname}`);
  },
};

// student.studentName = "superman";
// student.bank = "10billions";

// student.print();
// console.log(student);

let marks = { english: 15, maths: 12, science: 18, history: 10, geography: 14 };
let array = ["english", "science", "history", "maths", "geography"];

// console.log(marks[array[3]]);

// for (let i = 0; i < array.length; i++) {
//   console.log(marks[array[i]]);
// }

// for (let key of array) {
//   console.log(marks[key]);
// }

for (let key in marks) {
  console.log(key);
  console.log(marks[key]);
}

console.log(Object.values(marks));
console.log(Object.keys(marks));
student.print();

let qoutes = [
  "I have a dream",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "Never give up. Every failure is a step closer to success",
  "The greatest glory in living lies not in never falling, but in rising every time we fall",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "The most difficult thing in life is to stay in love with what you're doing. The rest is up to you.",
  "Don't let the fear of failure hold you back. It's a stepping stone to success.",
];

console.log(qoutes[Math.floor(Math.floor(Math.random() * qoutes.length))]);
