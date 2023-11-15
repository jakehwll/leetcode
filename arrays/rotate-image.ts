/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const rowLength = Math.sqrt(matrix.flat().length)
  const dupeMatrix = JSON.parse(JSON.stringify(matrix));

  matrix.forEach((origRow, origY) => {
    origRow.forEach((origCol, origX) => {
      const newX = rowLength - origY - 1
      const newY = origX;
      console.log(origCol, ' - ', origY, ',', origX, ' -> ', newX, ',', newY)
      matrix[newY][newX] = dupeMatrix[origY][origX]
    })
  })

  console.log(matrix)
};

// rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])

// rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);