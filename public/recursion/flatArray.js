let arr = [1, 2, 2, [3, 4], [5, [6, [7, 8]]]];

console.log(arr.flat(Infinity), "Using flat");
let flatArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!Array.isArray(arr[i])) {
    flatArr = [...flatArr, arr[i]];
  } else {
    flatArr = [...flatArr, ...getFlat(arr[i])];
  }
}

function getFlat(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArr = [...flatArr, arr[i]];
    } else {
      flatArr = [...flatArr, ...getFlat(arr[i])];
    }
  }
  return flatArr;
}

console.log(flatArr, "flatArr");

// Using Recusrion and Reduce
function getFlatArray(arr) {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? [...acc, ...getFlatArray(curr)]
      : [...acc, curr];
  }, []);
}

console.log(getFlatArray(arr));
