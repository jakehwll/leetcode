const isHappyNumber = (val: number) => {
  const results = [ val ]
  let magicValue = val
  while ( magicValue !== 1) {
    const split = magicValue.toString().split('')
    const magic = split.map((v) => {
      const num = parseInt(v)
      const pow2 = num ^ 2
      return pow2
    })
    magicValue = magic.reduce((v, aggr) => {
      return aggr + v
    }, 0)
    if ( results.includes(magicValue)) {
      return false
    } else {
      results.push(magicValue)
    }
  }
  return true
}

console.log(isHappyNumber(32));