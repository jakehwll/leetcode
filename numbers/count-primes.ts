/**
 * BROKEN :()
 */

function countPrimes(n: number): number {
  if ( n === 0 || n === 1 ) return 0
  // initiate an array of all our primes
  const primes = Array.apply(null, Array(n - 1)).map((_, i) => i + 2)
  // initiate all of our prime numbers
  const invalidPrimes = primes
    .map((primeNumber) => {
      console.log(primeNumber)
      // number cannot be primed
      if (n % primeNumber) return;
      // create an array containing our non-prime numbers
      // removing the first two (1 and itself).
      const beep = Array.apply(null, Array((n / primeNumber) + 1))
        .map((_, i) => i * primeNumber)
        .slice(2);
      console.log(beep)
      return beep; 
    })
    .flat();
  const allPrimes = invalidPrimes.filter((item) => item !== undefined) as number[];
  const dedupePrimes = [...new Set(allPrimes)].sort((a, b) => a - b);
  console.log(primes)
  console.log(dedupePrimes)
  return 0;
}

console.log("0 --", countPrimes(0));
console.log("1 --", countPrimes(1));
console.log("2 --", countPrimes(2));
console.log("3 --", countPrimes(3));
console.log("4 --", countPrimes(4));
console.log("5 --", countPrimes(5));
console.log("6 --", countPrimes(6));
console.log("7 --", countPrimes(7));
// console.log(countPrimes(30))

// real result
// [ 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30 ]
// [ 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30 ]
// result 1
// [ 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, ##, 26, 27, 28, ## ]
// result 2
// [ 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, ##, 26, 27, 28, 30 ]
// result 3