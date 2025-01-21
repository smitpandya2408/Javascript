function userdata(userName, age, password, address, organization) {
  this.userName = userName;
  this.age = age;
  this.password = password;
  this.address = address;
  this.organization = organization;

  // this.print = function (){
  //   console.log(`Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization}`);
  // }
}

//prototype it is used to not create a extra space
userdata.prototype.print = function () {
  return `Name: ${this.userName}, Age: ${this.age}, Organization: ${this.organization}`;
};

let elonmusk = new userdata(
  "elonMusk",
  55,
  "password123",
  "123 Main St",
  "SpaceX"
);

let steveJobs = new userdata(
  "Steve Jobs",
  54,
  "password456",
  "456 Elm St",
  "Apple"
);

console.log(elonmusk.print());
