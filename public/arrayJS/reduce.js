const arr = [1, 2, 3, 4, 3, 3, 2, 1, 2, 3, 4, 5, 7, 5, 4, 3];

// remove duplicate using set
const a = [];
const uniqueElements = [...new Set(arr)];
console.log(uniqueElements);

// Max element
console.log(Math.max(...arr));

// Count in obj
const obj = arr.reduce((acc, curr) => {
  acc[curr] = acc[curr] + 1 || 1;
  return acc;
}, {});
console.log(obj);

// Count in string
let str = "programming";
const stringCount = [...str].reduce((acc, char) => {
  acc[char] = acc[char] + 1 || 1;
  return acc;
}, {});

let strCount = "";
Object.entries(stringCount).forEach(
  ([key, value]) => (strCount += key + value)
);

console.log(strCount, "StringCount");

// Find max value using reduce
const numbers = [1, 3, 5, 2, 8];

const maxValue = numbers.reduce((acc, curr) => {
  acc = curr > acc ? curr : acc;
  return acc;
}, numbers[0]);

console.log(maxValue, "MaxValue");
