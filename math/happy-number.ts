function isHappy(n: number): boolean {
  let cursor = n
  const backlog: number[] = []
  while ( cursor !== 1 ) {
    console.log(backlog)
    if ( backlog.includes(cursor) ) return false
    const val = cursor.toString().split('')
    const digits = val.map((v) => parseInt(v))
    const digitsSquared = digits.map((v) => Math.pow(v, 2))
    const reduced = digitsSquared.reduce((num, aggr) => aggr + num)
    backlog.push(cursor)
    cursor = reduced
  }
  return true
};

console.log(isHappy(32))