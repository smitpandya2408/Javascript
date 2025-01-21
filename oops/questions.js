//question:01

function createProduct(name, price, category) {
  let object = {};
  (object.name = name),
    (object.price = price),
    (object.category = category),
    (object.displayInfo = function () {
      console.log(
        `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`
      );
    });
  return object;
}

const laptop = createProduct("Laptop", 1200, "Electronics");
const smartphone = createProduct("Smartphone", 800, "Electronics");

laptop.displayInfo();
smartphone.displayInfo();

//question:2

function createReportCard(name, subject, grade) {
  let obj2 = {};

  (obj2.name = name),
    (obj2.subject = subject),
    (obj2.grade = grade),
    (obj2.displayReport = function () {
      console.log(
        `Student: ${this.name}, Subject: ${this.subject}, Grade: ${this.grade}`
      );
    });
  return obj2;
}

const student1 = createReportCard("Alice", "Mathematics", "A");
const student2 = createReportCard("Bob", "Science", "B+");

student1.displayReport();
student2.displayReport();

//question:03

function createCar(model, rentalRate, availability) {
  let obj3 = {};

  (obj3.model = model),
    (obj3.rentalRate = rentalRate),
    (obj3.availability = availability),
    (obj3.rentCar = function () {
      if (this.availability) {
        this.availability = false;
        return `The ${this.model} has been rented.`;
      } else {
        return `Sorry, the ${this.model} is not available.`;
      }
    });

  obj3.returnCar = function () {
    this.availability = true;
    return `The ${this.model} has been returned and is now available.`;
  };
  obj3.getInfo = function () {
    return `Model: ${this.model}, Rental Rate: $${
      this.rentalRate
    }/day, Available: ${this.availability ? "Yes" : "No"}`;
  };

  return obj3;
}

const car1 = createCar("Toyota Corolla", 40, true);
const car2 = createCar("Honda Civic", 50, false);

console.log(car1.getInfo());
console.log(car1.rentCar());
console.log(car1.returnCar());

//question:4

function createBook(title, author, ISBN, availableCopies) {
  let obj4 = {};

  (obj4.title = title),
    (obj4.author = author),
    (obj4.ISBN = ISBN),
    (obj4.availableCopies = availableCopies),
    (obj4.getInfo = function () {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Available Copies: ${this.availableCopies}`;
    });
  return obj4;
}

const book1 = createBook("1984", "George Orwell", "1234567890", 5);
const book2 = createBook(
  "To Kill a Mockingbird",
  "Harper Lee",
  "0987654321",
  2
);

console.log(book1.getInfo());
console.log(book2.getInfo());

//question:5

function createEmployeeBadge(name, id, department, position) {
  let obj5 = {};
  (obj5.name = obj5),
    (obj5.id = id),
    (obj5.department = department),
    (obj5.position = position),
    (obj5.getBadgeInfo = function () {
      return `Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Position: ${this.position}`;
    });
  return obj5;
}

const employee1 = createEmployeeBadge(
  "Alice Johnson",
  "E123",
  "Engineering",
  "Software Engineer"
);
const employee2 = createEmployeeBadge(
  "Bob Smith",
  "E124",
  "Marketing",
  "Marketing Manager"
);

console.log(employee1.getBadgeInfo());
console.log(employee2.getBadgeInfo());

// constructor

function Room(roomNumber, type, price, isAvailable) {
  this.roomNumber = roomNumber;
  this.type = type;
  this.price = price;
  this.isAvailable = isAvailable;
}

Room.prototype.bookRoom = function () {
  if (this.isAvailable) {
    this.isAvailable = false;
    return `Room ${this.roomNumber} has been booked.`;
  } else {
    return `Room ${this.roomNumber} is not available.`;
  }
};

Room.prototype.releaseRoom = function () {
  this.isAvailable = true;
  return `Room ${this.roomNumber} is now available.`;
};

const room1 = new Room(101, "Deluxe", 150, true);
const room2 = new Room(102, "Standard", 100, false);

console.log(room1.bookRoom());
console.log(room1.releaseRoom());

//question 2

function Course(title, instructor, duration, studentsEnrolled) {
  this.title = title;
  this.instructor = instructor;
  this.duration = duration;
  this.studentsEnrolled = studentsEnrolled;
}

const jsCourse = new Course("JavaScript Basics", "John Doe", "4 weeks", 50);

console.log(jsCourse.title);
console.log(jsCourse.instructor);
console.log(jsCourse.duration);
console.log(jsCourse.studentsEnrolled);

//question 3

function Wallet(ownerName, balance, currency) {
  this.ownerName = ownerName;
  this.balance = balance;
  this.currency = currency;

  this.addMoney = function (amount) {
    this.balance += amount;
    console.log(
      `Added ${amount} ${this.currency}. New balance: ${this.balance} ${this.currency}.`
    );
  };

  this.getDetails = function () {
    console.log(
      `Owner: ${this.ownerName}, Balance: ${this.balance} ${this.currency}`
    );
  };
}

const myWallet = new Wallet("Alice", 100, "USD");
myWallet.getDetails();
myWallet.addMoney(50);
myWallet.getDetails();

//question:4

function Weather(city, temperature, humidity, forecast) {
  this.city = city;
  this.temperature = temperature;
  this.humidity = humidity;
  this.forecast = forecast;

  this.updateForecast = function (newForecast) {
    this.forecast = newForecast;
    console.log(
      `The forecast for ${this.city} has been updated to: ${this.forecast}`
    );
  };

  this.getWeatherDetails = function () {
    console.log(
      `City: ${this.city}, Temperature: ${this.temperature}°C, Humidity: ${this.humidity}%, Forecast: ${this.forecast}`
    );
  };
}

const cityWeather = new Weather("New York", 25, 60, "Sunny");
cityWeather.getWeatherDetails();

cityWeather.updateForecast("Rainy");

cityWeather.getWeatherDetails();

//question :05
function Student(name, rollNumber, grade, subjects) {
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.subjects = subjects;

  this.addSubject = function (newSubject) {
    this.subjects.push(newSubject);
    console.log(`Subject "${newSubject}" has been added for ${this.name}.`);
  };

  this.getDetails = function () {
    console.log(
      `Name: ${this.name}, Roll Number: ${this.rollNumber}, Grade: ${
        this.grade
      }, Subjects: ${this.subjects.join(", ")}`
    );
  };
}

const stud = new Student("John Doe", 101, "10th", ["Math", "Science"]);
stud.getDetails();

stud.addSubject("History");

stud.getDetails();
