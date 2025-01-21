class Animal {
  // constructor
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  // method// attach with prototype
  speak(sound) {
    console.log(`${this.name} says ${sound}`);
  }
}

class Dog extends Animal {
  constructor(name, types, color) {
    super(name, color);
    this.types = types;
  }
}

// const cat = new Animal("tom", "persian", "gray");
// const dog = new Animal("jack", "street", "black");

// dog.speak("bark");
// cat.speak("meow");
// console.log(cat);

// console.log(cat.speak == dog.speak);

let pug = new Dog("jack", "street", "black");
console.log(pug);
pug.speak("bark");
