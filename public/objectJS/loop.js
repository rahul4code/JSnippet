const myObject = { a: 1, b: 2, c: 3 };
// using for in
for (const key in myObject) {
  console.log(key); // This will return key
  console.log(myObject[key]); // This will return value
  console.log(`${key}:${myObject[key]}`); // Return object
}

// can check using hasOwnProperty
console.log(myObject.hasOwnProperty("c"));

// iterate using keys
const keys = Object.keys(myObject);

for (const key of keys) {
  console.log(key, myObject[key], "Using keys");
}

// Using values
const values = Object.values(myObject);
console.log(values, "Using values");

// Using entries
const entries = Object.entries(myObject);

entries.map(([key, value]) => console.log(key + " and " + value));

for (const [key, value] of entries) {
  console.log(key + " and " + value);
}

// Using forEach
Object.keys(myObject).forEach((key) =>
  console.log(key, myObject[key], "Using forEach")
);
