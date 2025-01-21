function Animal(animalName, color = "no color") {
  this.name = animalName;
  this.color = color;
}
Animal.prototype.show = function () {
  console.log(`animal ${this.name}`);
};

Dog.prototype = Object.create(Animal.prototype);

function Dog(animalName, type, color) {
  Animal.call(this, animalName, color); // call constructor of Animal // call is a function (obj,types)
  this.type = type;
}

function Cat(animalName, food, color) {
  Animal.call(this, animalName, color); // call constructor of Animal
  this.food = food;
}

let pug = new Dog("Pug", "street", "green");
let persian = new Cat("meow", "fish", "black");
console.log(pug);
pug.show();
console.log(persian);
