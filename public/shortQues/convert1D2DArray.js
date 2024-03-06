const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr2 = [];
let n = arr.length;
while (arr.length > 0) {
  arr2.push(arr.splice(0, 2));
  n--;
}

console.log(arr2, "1-D Array"); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
