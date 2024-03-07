const obj = { a: 1, b: 2, c: 3 };

// This create copy of reference not value
const copyRefObj = obj;
copyRefObj.a = 20;
console.log(obj, copyRefObj); // { a: 20, b: 2, c: 3 } { a: 20, b: 2, c: 3 }

// To avoid use spread operator to copy value but this will perform shallow copy
const copyObj = { ...obj };

console.log(obj, copyObj, "check"); // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
copyObj.a = 10;
console.log(obj, copyObj, "check"); // { a: 1, b: 2, c: 3 } { a: 10, b: 2, c: 3 }

// Shallow copy shortcomings
let originalArr = [1, 2, [3, 4, [5, 6]]];
let copyArr = [...originalArr];

copyArr[2][0] = 80;
console.log(originalArr, copyArr); // This will also change [1, 2, [80, 4, [5, 6]]] [1, 2, [80, 4, [5, 6]]]
