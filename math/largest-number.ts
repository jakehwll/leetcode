// not yet.

function largestNumber(nums: number[]): string {
  return nums
    .map((v) => v.toString())
    .sort((a, b) => a > b ? -1 : 1)
    .join('')
};

// console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));