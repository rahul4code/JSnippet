// Prime Number
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count === 2 ? "Prime Number" : "Not a Prime";
}

console.log(isPrime(9));

function isPrime(n, d = 2) {
  if (d > Math.sqrt(n)) {
    return true;
  }

  if (n % d === 0) {
    return false;
  } else {
    return isPrime(n, d + 1);
  }
}

console.log(isPrime(7), "isPrime");
