function intersect(nums1: number[], nums2: number[]): number[] {
  const inBoth = nums1.filter((v) => nums2.includes(v))
  let res: number[] = []

  inBoth.forEach((v) => {
    if ( res.includes(v) ) return
    const times1 = nums1.filter((filtered) => v === filtered)
    const times2 = nums2.filter((filtered) => v === filtered);
    res.push(...Array(Math.min(times1.length, times2.length)).fill(v))
  })

  return res.flat()
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));