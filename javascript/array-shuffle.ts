class Solution {
  nums: number[] = []
  constructor(nums: number[]) {
    this.nums = [...nums]
  }
  reset(): number[] {
    return this.nums
  }
  shuffle(): number[] {
    for (let i = this.nums.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }
    return this.nums.sort(() => Math.random() - 0.5);
  }
}
