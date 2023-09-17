function containsDuplicates(nums: number[]): number {
  const deduplicated = nums.filter((v, i) => nums.indexOf(v) === i);
  return deduplicated.length;
}

console.log(containsDuplicates([1, 2, 3, 1]))
console.log(containsDuplicates([1, 2, 3, 4]))