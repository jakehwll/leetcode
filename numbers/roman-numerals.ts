function romanToInt(s: string): number {
  const ROMAN_NUMERAL_VALUES = {
    // special
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    // normal
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let value = s
  const sum: number[] = []

  while ( value ) {
    for (const [key, val] of Object.entries(ROMAN_NUMERAL_VALUES)) {
      console.log(key);
      if (value.substring(0, key.length) === key) {
        value = value.substring(key.length, value.length);
        sum.push(val);
        break;
      }
    };
  }

  console.log(sum)

  return sum.reduce((a, b) => a + b, 0)
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCM"));
console.log(romanToInt("MCMXCIV"));