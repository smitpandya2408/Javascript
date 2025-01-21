//OOPS(Object-oriented programming)
//abstraction
//inheritance
//polymorphism
//Encapsulation

// <!-- //factory function -->
// let obj1 = {};
// let obj2 = {};
// console.log(obj1 == obj2);

function userdata(username, age, pass, add, organization) {
  let object = {};
  object.username = username;
  object.age = age;
  object.pass = pass;
  object.add = add;
  object.organization = organization;

  object.print = function (money) {
    console.log(
      `Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization} money: ${money}`
    );
  };

  return object;
}

let smit = userdata("smit", 21, "123", "amreli", "sk software");
console.log(smit);
smit.print(200000);
console.log(smit);

// let dhruv = userdata("dhruv", 22, "morbi", "sk company");
console.log(dhruv);
dhruv.print(10000);
