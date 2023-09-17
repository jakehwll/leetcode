const SUDOKU_BOARD = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidSudoku(board: string[][]): boolean {
  const isValidInput = (input: string[]) => {
    const array = input.filter((x) => x !== '.')
    return array.length === array.filter((v, i) => array.indexOf(v) === i).length;
  }
  const validColumn = (board: string[][], x: number) => {
    const values = board.map((v) => v[x]).filter((v) => v !== '.')
    return isValidInput(values);
  }
  const validRow = (board: string[][], y: number) => {
    const values = board[y]
    return isValidInput(values)
  }
  const validRegion = (board: string[][], x: number, y: number) => {
    const rows = [
      board[(y * 3)],
      board[(y * 3)+1],
      board[(y * 3)+2]
    ]
    const columns = rows.map((column) => [
      column[(x * 3)],
      column[(x * 3) + 1],
      column[(x * 3) + 2],
    ]);
    const values = columns.flat()
    return isValidInput(values)
  }

  const valid = [
    // Rows
    validColumn(board, 0),
    validColumn(board, 1),
    validColumn(board, 2),
    validColumn(board, 3),
    validColumn(board, 4),
    validColumn(board, 5),
    validColumn(board, 6),
    validColumn(board, 7),
    validColumn(board, 8),
    // Columns
    validRow(board, 0),
    validRow(board, 1),
    validRow(board, 2),
    validRow(board, 3),
    validRow(board, 4),
    validRow(board, 5),
    validRow(board, 6),
    validRow(board, 7),
    validRow(board, 8),
    // Regions
    validRegion(board, 0, 0),
    validRegion(board, 1, 0),
    validRegion(board, 2, 0),
    validRegion(board, 0, 1),
    validRegion(board, 1, 1),
    validRegion(board, 2, 1),
    validRegion(board, 0, 2),
    validRegion(board, 1, 2),
    validRegion(board, 2, 2),
  ];

  return valid.indexOf(false) === -1;
};

console.log(isValidSudoku(SUDOKU_BOARD))