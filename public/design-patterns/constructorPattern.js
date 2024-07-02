// using es5

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.setProfile = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.getProfile = function () {
  return { name: this.name, age: this.age };
};

// using es6 Module
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   setProfile(name, age) {
//     this.age = age;
//     this.name = name;
//   }

//   getProfile() {
//     return { name: this.name, age: this.age };
//   }
// }

const person = new Person();
person.setProfile("Rahul", 28);
console.log(person.getProfile());
