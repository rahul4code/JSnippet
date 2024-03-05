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
const entries = Object.entries(stringCount).forEach(
  ([key, value]) => (strCount += key + value)
);

console.log(strCount, "StringCount");
