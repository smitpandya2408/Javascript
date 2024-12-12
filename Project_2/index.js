//Question : 01
// You have a thermometer that measures room temperature. Write an if-elseif condition to determine:

// If the temperature is below 18°C, print "It's too cold, turn on the heater."
// If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
// If the temperature is above 25°C, print "It's too hot, turn on the fan."

let temperature = 22;

if (temperature < 18) {
  console.log("It's too cold, turn on the heater.");
} else if (temperature >= 18 && temperature <= 25) {
  console.log("The temperature is comfortable.");
} else {
  console.log("It's too hot, turn on the fan.");
}

//question : 02
// A student gets a score out of 100 in an exam. Write an if-elseif condition to determine:

// If the score is 90 or above, print "Grade A."
// If the score is between 75 and 89, print "Grade B."
// If the score is between 50 and 74, print "Grade C."
// If the score is below 50, print "Grade D."

let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75 && score <= 89) {
  console.log("Grade B");
} else if (score >= 50 && score <= 74) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

//question : 03
// You are driving and approach a traffic signal. Write an if-elseif condition to determine:

// If the light is "Red", print "Stop."
// If the light is "Yellow", print "Slow down."
// If the light is "Green", print "Go."

let lightColor = "Green";

if (lightColor === "Red") {
  console.log("Stop.");
} else if (lightColor === "Yellow") {
  console.log("Slow down.");
} else if (lightColor === "Green") {
  console.log("Go.");
} else {
  console.log("Invalid light color.");
}

//question : 04
// A store is giving discounts based on the total bill amount. Write an if-elseif condition to determine:

// If the bill is less than $50, no discount.
// If the bill is between $50 and $100, give a 10% discount.
// If the bill is more than $100, give a 20% discount.

let billAmount = 75;

if (billAmount < 50) {
  console.log("No discount.");
} else if (billAmount >= 50 && billAmount <= 100) {
  let discount = billAmount * 0.1;
  console.log(`You get a 10% discount of $${discount}.`);
} else {
  let discount = billAmount * 0.2;
  console.log(`You get a 20% discount of $${discount}.`);
}

//question : 05
// You have different tasks to do based on the time of day. Write an if-elseif condition to determine:

// If the time is before 7 AM, print "It's too early, sleep a bit more."
// If the time is between 7 AM and 10 AM, print "Time for breakfast and morning exercise."
// If the time is between 10 AM and 6 PM, print "Time to work or study."
// If the time is after 6 PM, print "Relax for the day."

let currentTime = 14;

if (currentTime < 7) {
  console.log("It's too early, sleep a bit more.");
} else if (currentTime >= 7 && currentTime < 10) {
  console.log("Time for breakfast and morning exercise.");
} else if (currentTime >= 10 && currentTime < 18) {
  console.log("Time to work or study.");
} else {
  console.log("Relax for the day.");
}
