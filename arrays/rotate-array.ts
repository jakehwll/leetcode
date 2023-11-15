// broken, lol
/**
 Do not return anything, modify nums in-place instead.
 */ 
export function rotate(nums: number[], k: number) {
  if ( k === 2 || k === 3 ) {
    k = k + 1
  }
  let dup = [
    ...nums,
    ...nums
  ];
  for (let index = 0; index < nums.length; index++) {
    console.log(index)
    nums[index] = dup[index];
  }
  console.log(nums)
  return nums
}

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
// rotate([-1, -100, 3, 99], 2);
// rotate([1], 1);
// rotate([1, 2], 1);
// rotate([1, 2, 3], 0);
