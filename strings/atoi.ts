function myAtoi(s: string): number {
  const input = s;
  const output = parseInt(input);
  if ( Number.isNaN(output) ) return 0
  if (output < Math.pow(2, 31) * -1) {
    return Math.pow(2, 31) * -1;
  }
  if (output > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  return output
}

console.log(myAtoi('-1'));
console.log(myAtoi("  -1"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));