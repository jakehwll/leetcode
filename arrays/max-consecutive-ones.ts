function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0
  const valid: number[] = []
  nums.forEach((number, index) => {
    console.log(`-`, number)
    if ( number === 1 ) {
      count = count + 1;
    } else {
      valid.push(count)
      count = 0
    }
    if ( nums.length-1 === index ) {
      valid.push(count);
    }
  })
  return Math.max(...valid)
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));