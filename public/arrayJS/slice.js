let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slicedArray = arr.slice(1, 3);
console.log(slicedArray, "SlicedArray"); // [2,3]
console.log(arr.slice(1, 3), "without assign"); //[2,3]
