let Object = {
  name: "john",
  age: 30,
};

Object.freeze(Object);

Object.age = 50;
console.log(Object);
