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

  const traverse = (prefix: string, i: number) => {
    const current = letters[i]
    const next = letters[i+1]

    if ( current === undefined ) {
      return []
    }

    if ( next !== undefined ) {
      const res: string[] = current
        .map((letter) => {
          return traverse(`${prefix}${letter}`, i + 1);
        })
        .flat();
      return res
    } else {
      return current.map((letter) => {
        return `${prefix}${letter}`
      })
    }
  }

  return traverse('', 0) ?? []
}

// console.log(letterCombinations("23"))
// console.log(letterCombinations(""))
// console.log(letterCombinations("2"))
console.log(letterCombinations("234"));