const arr = [1, 2, 3, 4, 3, 3, 2, 1, 2, 3, 4, 5, 7, 5, 4, 3];

// remove duplicate using filter --> complexity O(n^2)
const uniqueElements = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueElements, "UniqueElements");

// remove using set --> Time complexity O(n)
console.log([...new Set(arr)], "Using Set");

// remove duplicate using brute force
let uniqueArray = [];
for (let i = 0; i < arr.length; i++) {
  let isPresent = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    if (arr[i] === uniqueArray[j]) {
      isPresent = true;
    }
  }
  if (!isPresent) {
    uniqueArray.push(arr[i]);
  }
}

console.log(uniqueArray, "Unique Array using brute force");

const duplicateArr = [5, 2, 2, 3, 5, 6, 3, 7];

// Unique Elements occured only once i.e 6 and 7
const unique = duplicateArr.filter(
  (item, index) => duplicateArr.indexOf(item) === duplicateArr.lastIndexOf(item)
);
console.log(unique, "Occured once");
