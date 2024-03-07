const arr = [1, 2, 3, 4, 3, 3, 2, 1, 2, 3, 4, 5, 7, 5, 4, 3];

function removeDuplicate(arr, result = []) {
  if (arr.length <= 1) {
    return result;
  }
  const currentElement = arr[0];
  if (!result.includes(currentElement)) {
    result.push(currentElement);
  }

  return removeDuplicate(arr.slice(1), result);
}

console.log(removeDuplicate(arr));
