function letterCombinations(digits: string): string[] {
  const mapping: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  const digitArr = digits.split("");
  const letters = digitArr.map((v) => mapping[v]);

  return []
}

console.log(letterCombinations("23"));