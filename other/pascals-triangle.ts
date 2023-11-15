function generate(numRows: number): number[][] {
  const res = new Array(numRows)

  for (let length = 0; length < res.length; length++) {
    const row = new Array(length + 1);

    for (let index = 0; index < row.length; index++) {
      if ( index === 0 || index === row.length-1 ) {
        row[index] = 1
      } else {
        const prevRow = res[length-1]
        row[index] = prevRow[index - 1] + prevRow[index]
      }
    }

    res[length] = row
  }

  return res
};

console.log(generate(1))
console.log(generate(5))