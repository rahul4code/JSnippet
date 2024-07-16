const arr = [1, 2, 3, 4, 5, 5, 5];
const mySet = new Set(arr);
mySet.add(50);
mySet.delete(5);
mySet.forEach((item) => console.log(item));
console.log(mySet.size);
console.log(mySet, "Set");

// WeakSet->
// objects are weakly held, meaning if there are no other references to an object stored in a WeakSet, it can be garbage collected.
// Only objects can be stored.
// Non-iterable

const weakSet = new WeakSet();

let obj1 = { name: "object1" };
let obj2 = { name: "object2" };

weakSet.add(obj1);
weakSet.add(obj2);
// If obj2 is dereferenced, it can be garbage collected
obj2 = null;

console.log(weakSet.has(obj1), "WeakSet");

console.log(weakSet.has(obj2), "WeakSet"); // The WeakSet no longer holds a strong reference to obj2
