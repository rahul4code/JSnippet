const counter = (function CounterModule() {
  let count = 0; // Private Variable
  function increment() {
    return count++;
  }

  function decrement() {
    // Private Method
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    incrementCount: function () {
      // Public method
      increment();
    },
    decrementCount: decrement, // Public method
    getCount: getCount, // Public method
  };
})();

console.log(counter.getCount());
counter.incrementCount();
console.log(counter.getCount());
counter.decrementCount();
console.log(counter.getCount());
