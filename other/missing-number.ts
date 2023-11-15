function missingNumber(nums: number[]): number {
  const MIN = Math.min(...nums)
  const MAX = Math.max(...nums)
  let numbers = Array(MAX - MIN + 1)
    .fill(0)
    .map((_, i) => MIN + i);
  numbers = numbers.filter((v) => !nums.includes(v))
  return numbers.length === 1
    ? numbers[0]
    : nums.includes(0)
      ? MAX + 1
      : 0
};

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(2, missingNumber([1]))
console.log(2, missingNumber([0, 1]));