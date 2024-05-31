function Counter() {
  let count = 0;
  function inc() {
    return count++;
  }
  function dec() {
    return count--;
  }
}

const count = Counter;
console.log(count, "count");
