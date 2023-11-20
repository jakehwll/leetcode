/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const lookup = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex]
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const surrounds = lookup.map(([offsetRow, offsetCol]) => {
        const newRowIndex = rowIndex - offsetRow;
        const newColIndex = colIndex - offsetCol;

        if ( 
          newRowIndex < 0 || 
          newRowIndex > board.length - 1 || 
          newColIndex < 0 || 
          newColIndex > board[0].length - 1
        ) {
          return undefined
        }

        return board[newRowIndex][newColIndex]
      })

      if ( surrounds.every((v) => ['X', 'O'].includes(v ?? '')) ) {
        board[rowIndex][colIndex] = 'X'
      }
    }
  }

  console.log(board.join('\n'))
}

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);