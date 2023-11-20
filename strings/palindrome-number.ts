function isPalindrome(x: number): boolean {
  const val = x.toString()
  const isNotDivisible = val.length % 2 !== 0
  const halfSize = val.length / 2;
  const start = val.slice(0, halfSize)
  const end = val.slice(isNotDivisible ? halfSize + 1 : halfSize, val.length);
  return start === end.split('').reverse().join('')
}

console.log(true, isPalindrome(1221));
console.log(true, isPalindrome(121))