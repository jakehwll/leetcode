function maxArea(height: number[]): number {
  let max = 0
  for (let index1 = 0; index1 < height.length; index1++) {
    const h1 = height[index1];
    for (let index2 = 0; index2 < height.length; index2++) {
      if ( index1 === index2 ) continue;
      const h2 = height[index2];
      const xheight = Math.min(h1, h2)
      const xlength = Math.max(index1, index2) - Math.min(index1, index2);
      max = Math.max(max, xlength * xheight);
    }
  }
  return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]))