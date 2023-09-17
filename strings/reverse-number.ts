function reverse(x: number): number {
  const number = x.toString()
  const isNegative = number.indexOf('-') !== -1
  const output = (parseInt(
    number.replace('-', '')
    .split('')
    .reverse()
    .join('')
  ) * (isNegative ? -1 : 1))
  if (output < Math.pow(2, 31) * -1 || output > Math.pow(2, 31) - 1) return 0;
  return output
};

console.log(reverse(123))
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));