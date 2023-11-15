function plusOne(digits: number[]): number[] {
  digits = digits.reverse()

  for (let i = 0; i < digits.length; i++) {
    digits[i] = digits[i] + 1;
    if ( digits[i] === 10 && i === (digits.length - 1) ) {
      console.log('triggered next 10')
      // digits[i] = 0
      // digits[i + 1] = 1
    }
  }

  return digits.reverse();
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([8, 9, 9, 9]));