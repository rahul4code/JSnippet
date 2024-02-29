// let matrix = [
//   [112, 42, 83, 119],
//   [56, 125, 56, 49],
//   [15, 78, 101, 43],
//   [62, 98, 114, 108],
// ];

let matrix = [
  [107, 54, 128, 15],
  [12, 75, 110, 138],
  [100, 96, 34, 85],
  [75, 15, 28, 112],
];

function getMaxReversedCol(matrix) {
  const sumOfColumns = [];
  const transposedMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    let sum = 0;
    const tranposedColumns = [];
    for (let col = 0; col < matrix[row].length; col++) {
      sum += matrix[col][row];
      tranposedColumns.push(matrix[col][row]);
    }
    transposedMatrix.push(tranposedColumns);
    sumOfColumns.push(sum);
  }
  let indexOfColumn = sumOfColumns.indexOf(Math.max(...sumOfColumns));
  let reversedColumn = transposedMatrix[indexOfColumn].reverse();
  return { indexOfColumn, reversedColumn };
}

const res = getMaxReversedCol(matrix);
console.log(res);

function updateColumnMatrix(array, index) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = index; col <= index; col++) {
      matrix[row][col] = array[row];
    }
  }
  return matrix;
}

updateColumnMatrix(res?.reversedColumn, res?.indexOfColumn);

function getMaxReversedRow(matrix) {
  const sumOfRows = matrix.map((i) =>
    i.reduce((acc, curr) => (acc += curr), 0)
  );
  const index = sumOfRows.indexOf(Math.max(...sumOfRows));
  const reversedRow = matrix[index].reverse();
  return { index, reversedRow };
}

const resilt = getMaxReversedRow(matrix);
console.log(resilt);
let quadSum = 0;
for (let row = 0; row < 2; row++) {
  for (let col = 0; col < 2; col++) {
    quadSum += matrix[row][col];
  }
}
console.log(quadSum, "quadSum");
