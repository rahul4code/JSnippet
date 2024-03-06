let str = "test";
console.log(Array.from(str)); //[ 't', 'e', 's', 't' ]

let arr = [1, 2, 3, 4];
Array.from(arr, (i) => console.log(i)); // Can be use to iterate
const twice = Array.from(arr, (i) => i * 2);
console.log(twice); // [ 2, 4, 6, 8 ]

const newArr = new Array(30);
console.log(newArr); // 30 empty elements
