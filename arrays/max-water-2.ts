function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let ans = 0

  while ( left < right ) {
    let area = 0
    if (height[left] < height[right]) {
      area = height[left] * (right - left);
      left++;
    } else {
      area = height[right] * (right - left);
      right--;
    }
    ans = Math.max(ans, area);
  }

  return ans
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));