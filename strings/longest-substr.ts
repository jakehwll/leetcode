function lengthOfLongestSubstring(s: string): number {
  let dict = ''
  let usedLengths: number[] = []
  let input = s.split('')
  
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (dict.indexOf(char) === -1) {
      dict += char
      usedLengths.push(dict.length)
    } else {
      dict = char.slice(0,i).concat(char)
    }
  }

  console.log(usedLengths)

  const longestSubstring = Math.max(...(usedLengths))
  return longestSubstring ?? 0;
};

// console.log(lengthOfLongestSubstring("abcabcabc"))
// console.log(lengthOfLongestSubstring("abctest"))

// expected 2
// console.log(lengthOfLongestSubstring("aab"));

// expected 1
// console.log(lengthOfLongestSubstring("bbbbb"));

// expected 3
// console.log(lengthOfLongestSubstring("dvdf"));

// expect 4
console.log(lengthOfLongestSubstring("abcabcbb"));