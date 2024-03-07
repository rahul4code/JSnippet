const obj = { a: 1, b: 2, c: { d: 4, e: { f: 6 } } };
//Deep copy
const deepCopyObj = JSON.parse(JSON.stringify(obj));
deepCopyObj.c.d = 10;
console.log(obj, deepCopyObj); // { a: 1, b: 2, c: { d: 4, e: { f: 6 } } }; { a: 1, b: 2, c: { d: 10, e: { f: 6 } } };
