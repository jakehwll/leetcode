function twoSum(nums: number[], target: number): number[] {
  const curr1 = nums
  const curr2 = nums
  
  for (let index1 = 0; index1 < curr1.length; index1++) {
    const num1 = curr1[index1]
    for (let index2 = 0; index2 < curr2.length; index2++) {
      const num2 = curr2[index2];
      if ( index1 === index2 )
        continue
      if ( num1 + num2 === target ) {
        return [index1, index2]
      }
    }
  }

  return [-1,-1]
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6))