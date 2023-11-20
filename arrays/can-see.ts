function canSeePersonsCount(heights: number[]): number[] {
  for (let index = 0; index < heights.length; index++) {
    const people = heights.slice(index+1, heights.length)
    let maxHeight = 0
    const visible: number[] = []
    for (let pindex = 0; pindex < people.length; pindex++) {
      const personHeight = people[pindex]
      if ( personHeight > maxHeight ) {
        visible.push(index + 1 + pindex + 1)
      }
      maxHeight = Math.max(maxHeight, personHeight)
    }
    console.log(`Person ${index+1} can see`, visible)
  }
  return []
};

console.log([3, 1, 2, 1, 1, 0], canSeePersonsCount([10, 6, 8, 5, 11, 9]));