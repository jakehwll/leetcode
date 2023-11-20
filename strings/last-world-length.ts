function lengthOfLastWord(s: string): number {
  const words = s.split(" ").filter((v) => v !== "");
  const word = words[words.length - 1]
  console.log(words, word)
  return word.length
};

console.log(lengthOfLastWord('hello world  '))