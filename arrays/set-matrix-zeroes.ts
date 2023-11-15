/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const locs: Array<[number, number]> = [];
  
  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if ( col === 0 ) {
        locs.push([rowIndex, colIndex])
      }
    })
  });

  const zeroedCols = locs.map(([rowIndex, colIndex]) => colIndex)
  const zeroedRows = locs.map(([rowIndex, colIndex]) => rowIndex);

  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (
        zeroedCols.includes(colIndex) ||
        zeroedRows.includes(rowIndex)
      ) {
        matrix[rowIndex][colIndex] = 0;
      }
    })
  })

  console.log(matrix)
}

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);