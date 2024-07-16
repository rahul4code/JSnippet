// Example of closure
function outer() {
  let i = 10;
  function inner() {
    console.log(i);
  }
  inner();
}

outer();

// value printing question
function withoutClosure() {
  for (var i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i, "current value");
    }, i * 1000);
  }
}

withClosure();

function withClosure() {
  for (var i = 1; i < 6; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i, "With Closure");
      }, i * 1000);
    })(i);
  }
}

// Creating private variables
function User() {
  let userId = 101;

  function getUserId() {
    return userId;
  }

  return {
    extractUserId: function () {
      return getUserId();
    },
  };
}

// console.log(User())
const user = User();
console.log(user.extractUserId(), "User");

// How to clean up in Closures
function createEventListener(element, event, handler) {
  function attachListener() {
    element.addEventListener(event, handler);
  }

  function removeListener() {
    element.removeEventListener(event, handler);
  }

  attachListener();

  return {
    cleanUp: removeListener,
  };
}

// Use WeakMap in closure for memory efficiency
function createCache() {
  const cache = new WeakMap();

  function getValue(key) {
    return cache.get(key);
  }

  function setValue(key, value) {
    cache.set(key, value);
  }

  return {
    getCache: function (key) {
      return getValue(key);
    },
    setCache: function (key, value) {
      return setValue(key, value);
    },
  };
}

const cache = createCache();
let obj = { formData: "filled" };
cache.setCache(obj, "UserData");
console.log(cache.getCache(obj));
obj = null;
// After this point, if the garbage collector runs, the object should be collected
// and its entry in the WeakMap should be removed
