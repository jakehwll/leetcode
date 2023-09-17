// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(n: number): string[] {
  let output = []
  let i = 0
  while(i < n) {
    i = i + 1;
    const isDivisible3 = i % 3 === 0
    const isDivisible5 = i % 5 === 0
    if ( isDivisible3 && isDivisible5 ) {
      output.push('FizzBuzz')
    } else if (isDivisible3) {
      output.push('Fizz')
    } else if ( isDivisible5 ) {
      output.push('Buzz')
    } else {
      output.push(i.toString());
    }
  }
  return output
};

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))