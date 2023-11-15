function titleToNumber(columnTitle: string): number {
  const lookup: Record<string, number> = {
    'A': 1,  'B': 2,  'C': 3,  'D': 4,  'E': 5,  'F': 6,  
    'G': 7,  'H': 8,  'I': 9,  'J': 10, 'K': 11, 'L': 12, 
    'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 
    'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 
    'Y': 25, 'Z': 26                                      
  }

  const letters = columnTitle.split('')
  let value = 0

  for (let i = 0; i < letters.length; i++) {
    value = value * 26 + lookup[columnTitle[i]];
  }

  console.log(value)

  return value
};

// console.log(titleToNumber('A')); // 1
// console.log(titleToNumber('AB')); // 28
// console.log(titleToNumber('ZY')); // 701
// console.log(titleToNumber('ZZ')); // 702
// console.log('703', titleToNumber('AAA')); // 703
// console.log('704', titleToNumber('AAB')); // 704
console.log("", titleToNumber("AAAAAAA")); // 1889568