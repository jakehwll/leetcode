function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let index = 0; index < arr.length; index++) {
    arr[index] = fn(arr[index], index);
  }
  return arr
}

console.log(map([1,2,3], function plusone(n) { return n + 1; }))
