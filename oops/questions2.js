//question:01
function Vehicle(type, wheels, speed) {
  this.type = type;
  this.wheels = wheels;
  this.speed = speed;
}

Vehicle.prototype.describe = function () {
  console.log(
    `This is a ${this.type} with ${this.wheels} wheels, and it can go up to ${this.speed} km/h.`
  );
};

let car = new Vehicle("Car", 4, 200);
car.describe();

let bike = new Vehicle("Bike", 2, 120);
bike.describe();

//questions:02

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getBookInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
};

// Example usage
let book = new Book("1984", "George Orwell", 1949);
console.log(book.getBookInfo());

let anotherBook = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(anotherBook.getBookInfo());

//question:03

function BankAccount(accountNumber, balance, accountHolder) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.accountHolder = accountHolder;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Deposit successful! New Balance: ${this.balance}`);
};

let account = new BankAccount("123456", 500, "Alice");
account.deposit(200);

let anotherAccount = new BankAccount("789012", 1000, "Bob");
anotherAccount.deposit(500);

//question:04

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.giveRaise = function (percentage) {
  this.salary += this.salary * (percentage / 100);
  console.log(`Salary increased by ${percentage}%. New Salary: ${this.salary}`);
};

let employee = new Employee("John", "Developer", 50000);
employee.giveRaise(10);

let anotherEmployee = new Employee("Sarah", "Manager", 75000);
anotherEmployee.giveRaise(20);

//question:05

function Movie(title, genre, rating) {
  this.title = title;
  this.genre = genre;
  this.rating = rating;
}

Movie.prototype.rate = function (newRating) {
  this.rating = newRating;
  console.log(`The new rating for ${this.title} is ${newRating}`);
};

let movie = new Movie("Inception", "Sci-Fi", 9);
movie.rate(9.5);

let anotherMovie = new Movie("The Matrix", "Action", 8.7);
anotherMovie.rate(9.2);
