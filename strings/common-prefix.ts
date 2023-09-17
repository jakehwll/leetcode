function longestCommonPrefix(strs: string[]): string {
  // Figure out how many times we should try.
  const longestPossiblePrefix = Math.min(...strs.map((v) => v.length)) + 1;
  let currentLargest = 0
  // Loop through that many times til we break.
  for (let i = 0; i < longestPossiblePrefix; i++) {
    const baseline = strs[0];
    const longest = strs.filter((v) => v.startsWith(baseline.substring(0, i)));
    if ( longest.length === strs.length ) {
      currentLargest = i
    } else {
      break;
    }
  }
  return strs[0].substring(0,currentLargest)
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));