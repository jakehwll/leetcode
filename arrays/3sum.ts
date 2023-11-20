/**
 * This "works", but isn't necessarily the best-approach due to de-duplication still re-checking math.
 * A better approach would take ABC and de-duplicate before even being checked.
 */

function threeSum(nums: number[]): number[][] {
  const formulas = new Map()
  for (let index1 = 0; index1 < nums.length; index1++) {
    for (let index2 = 0; index2 < nums.length; index2++) {
      for (let index3 = 0; index3 < nums.length; index3++) {
        if ( index1 === index2 || index1 === index3 || index2 === index3)
          continue
        else {
          const formula = [nums[index1], nums[index2], nums[index3]].sort((a, b) => a - b)
          const res = nums[index1] + nums[index2] + nums[index3];
          if ( res === 0 ) {
            formulas.set(formula.join(","), res);
          }
        }
      }
    }
  }
  const keys = [...formulas.keys()]
  return keys.map((v: string) => v.split(',').map((v) => parseInt(v)))
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));