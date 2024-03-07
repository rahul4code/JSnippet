// First create First Order Functions

const firstOrderFunction = () => {
  console.log("Hi I am FOF");
};
// Higher Order Functions
const higherOrderFunction = (returnFOF) => returnFOF();
// Call HOF
higherOrderFunction(firstOrderFunction);

// Sum of 256 in any number
const doSum = (num) => {
  return (initialNum) => initialNum + num;
};

const add13 = doSum(13);

const result = add13(256);
console.log(result, "Result");
