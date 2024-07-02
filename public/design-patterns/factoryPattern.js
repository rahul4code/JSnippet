function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getProfile = function () {
  return { name: this.name, age: this.age };
};

Person.prototype.setProfile = function (name, age) {
  this.name = name;
  this.age = age;
};

function createPerson(name, age) {
  return new Person(name, age);
}

console.log(createPerson("Rahul", 28));
