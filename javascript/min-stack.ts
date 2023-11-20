class MinStack {
  numbers: number[] = []
  push(val: number): void {
    this.numbers.push(val)
  }
  pop(): void {
    this.numbers.pop()
  }
  top(): number {
    return this.numbers[this.numbers.length - 1]
  }
  getMin(): number {
    return Math.min(...this.numbers);
  }
}
