function findNumbers(nums: number[]): number {
  const valid = nums
    .map((v) => (
      v.toString()
    ))
    .filter((v) => 
      v.length % 2 === 0
    )

  return valid.length
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));