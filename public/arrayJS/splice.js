let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const spilcedArray = arr.splice(1, 3);
console.log(spilcedArray); //[2,3,4]

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr2.splice(1, 3), "return"); // [2,3,4]

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const modifiedArray = arr3.splice(1, 0, 0);
console.log(modifiedArray, "modifiedArray"); // []
console.log(arr3); // [1, 0, 2, 3, 4,5, 6, 7, 8, 9]
