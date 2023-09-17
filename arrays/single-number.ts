function singleNumber(nums: number[]) {
    const deduplicated = nums
        .filter((x, i) => nums.filter((y) => y === x).length === 1);
    if ( deduplicated.length !== 1 )
        return null
    return deduplicated[0]
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))