function removeDuplicates(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    const next = nums[i + 1]
    if ( curr === next ) continue;
    nums[count] = nums[i]
    count++;
  }
  console.log(nums)
  return count;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));