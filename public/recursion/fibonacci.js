function getFibonacci(n) {
  let first = 0;
  let second = 1;
  let next = first + second;
  let series = [first, second, next];
  for (let i = 3; i < n; i++) {
    first = second;
    second = next;
    next = first + second;
    series.push(next);
  }
  return series;
}

// console.log(getFibonacci(7));
// 0,1,1,2,3,5,8

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 5,
  series = [];
for (let i = 0; i < n; i++) {
  series.push(fibonacci(i));
}

console.log(series, "series");
