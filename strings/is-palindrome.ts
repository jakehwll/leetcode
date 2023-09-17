function isPalindrome(raw: string): boolean {
  const input = raw.replaceAll(/[^a-zA-Z0-9]+/g, "").toLocaleLowerCase();
  const output = input.split('').reverse().join('')
  console.log(input)
  return input === output
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "))