function addNumber(a) {
  return function (b) {
    return a + b;
  };
}

console.log(addNumber(5)(10));
