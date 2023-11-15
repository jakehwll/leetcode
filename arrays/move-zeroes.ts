/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const cursor = JSON.parse(JSON.stringify(nums))
  let countLeft = 0
  let countRight = 1
  for (let index = 0; index < cursor.length; index++) {
    const num = cursor[index];
    if ( num === 0 ) {
      nums[nums.length - countRight] = num
      countRight++
    } else {
      nums[countLeft] = num
      countLeft++
    }
  }
  console.log(nums)
}

moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([1, 1, 0, 3, 12]);
// moveZeroes([0]);