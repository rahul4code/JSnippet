const myMap = new Map([
  ["name", "Rahul"],
  ["age", 28],
]);

myMap.set("country", "India");
console.log(myMap);
console.log(myMap.get("name"));
console.log(myMap.size);
console.log(myMap.has("name"));
// console.log(myMap.clear());
// strong Map
// Reference of key object still exist even if you set as undefined

const strongMap = new Map();
let person2 = { name: "Strong User" };

strongMap.set(person2, "This is strong user data");
person2 = undefined;

strongMap.forEach((item) => {
  console.log(item, "---Strong Map items");
});

// WeakMap -
// It holds weak references to its keys.
// If there are no other strong references to an object used as a key in a WeakMap, the key-value pair can be garbage collected.
// Keys must be objects (not primitives).
// Can not have forEach method

const weakMap = new WeakMap();
let person = { name: "TestUser" };
weakMap.set(person, "This is test userData");

person = undefined;
console.log(weakMap.get(person), "WeakMap"); // undefined as already cleaned
