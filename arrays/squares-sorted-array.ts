function sortedSquares(nums: number[]): number[] {
  const values = nums.map((v) => v * v).sort((a, b) => a - b)
  return values
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));