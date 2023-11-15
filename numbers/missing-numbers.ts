function missingNumber(nums: number[]): number {
  const min = Math.min(...nums)
  const max = Math.max(...nums)

  return max + min
};

console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));