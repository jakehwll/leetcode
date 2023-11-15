function maxProfit(prices: number[]): number {
  if ( prices.length === 0 ) return 0

  let profit = 0

  for (let index = 0; index < prices.length; index++) {
    if ( prices[index + 1] > prices[index] ) {
      profit += prices[index+1] - prices[index]
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));