class Person {
  constructor(name, age) {
    if (Person.instance) {
      throw new Error("You can only have one instance of Person");
    } else {
      this.name = name;
      this.age = age;
      Person.instance = this;
    }
  }

  getProfile() {
    return { name: this.name, age: this.age };
  }

  setProfile(name, age) {
    this.name = name;
    this.age = age;
  }

  static getInstance(name, age) {
    if (!Person.instance) {
      Person.instance = new Person(name, age);
    }
    return Person.instance;
  }
}

const personInstance = Person.getInstance("Rahul", 25);
// Object.freeze(personInstance);

// export default personInstance;
console.log(personInstance.getProfile(), "Person1");
const person2 = personInstance.setProfile("Jane", 30);
console.log(personInstance.getProfile(), "Person2");
