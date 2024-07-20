console.log(sum(1)(2)(3)(5)(6)());

function sum(a) {
  let total = a;
  return function next(b) {
    if (b === undefined) {
      return total;
    } else {
      total += b;
      return next;
    }
  };
}
