/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < (k + (k % 2 === 0 ? 0 : 1)); i++) {
    const element = nums.shift();
    if ( !element ) return
    nums[nums.length] = element
  }
  console.log(nums)
};

console.log([5, 6, 7, 1, 2, 3, 4]);
rotate([1, 2, 3, 4, 5, 6, 7], 3);

console.log([3, 99, -1, -100]);
rotate([-1, -100, 3, 99], 2);