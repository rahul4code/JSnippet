// Object.assign -> perform shallow copy
const obj = { a: 1, b: 2, c: 3 };

const newObj = Object.assign({}, obj);
console.log(newObj);

// Array.from -> Perform shallow copy
const arr = [1, 2, 3, 4];
const copyArr = Array.from(arr);
copyArr[0] = 100;
console.log(copyArr, arr); // [100, 2, 3, 4] [1, 2, 3, 4]

//Using Object.create -> for prototype-based object (create shallow copy in case of copy)
// Define a prototype object
const prototypeObj = {
  greet: function () {
    console.log("Hello from prototype!");
  },
  age: 25,
};

// Create a new object with prototypeObj as its prototype
const newCreatedObj = Object.create(prototypeObj);

// Add additional properties to the new object
newCreatedObj.name = "John";

// Access properties and methods from the prototype
console.log(newCreatedObj); // John
newCreatedObj.greet(); // Hello from prototype!

// If you want to see the inherited properties as well,
// you can use a loop to iterate over all properties, including those from the prototype
for (let prop in newCreatedObj) {
  console.log(`${prop}: ${newCreatedObj[prop]}`);
}
