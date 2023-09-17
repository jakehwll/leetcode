function firstUniqChar(s: string): number {
  const uniqueFlat: string[] = []
  const uniqueTimes: [string, number][] = []
  const input = s.replaceAll(" ", "").split("");
  // Find our unique characters.
  input.map((v) => {
    if (uniqueFlat.indexOf(v) === -1) {
      uniqueFlat.push(v)
    }
  })
  // Find how many times they're unique.
  uniqueFlat.map((a) => {
    uniqueTimes.push([
      a,
      input.filter((b) => a === b).length
    ]);
  })
  // Find the first instance of each unique.
  const uniqueCharacters = 
    uniqueTimes
      .map((v) => {
        if (v[1] !== 1) return null;
        return s.indexOf(v[0]);
      })
      .filter((v) => v !== null)
  return uniqueCharacters[0] ?? -1
};

console.log(firstUniqChar('test string'))