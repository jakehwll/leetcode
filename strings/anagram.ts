function isAnagram(s: string, t: string): boolean {
  let valid = true
  let slength: Record<string, number> = {};
  let tlength: Record<string, number> = {};
  let curr = s.split('')
  while (curr) {
    const letter = curr.shift()
    if ( !letter ) break
    slength[letter]
      ? slength[letter] = slength[letter] + 1
      : slength[letter] = 1
  }
  curr = t.split("");
  while (curr) {
    const letter = curr.shift();
    if (!letter) break;
    tlength[letter]
      ? tlength[letter] = tlength[letter] + 1
      : tlength[letter] = 1
  }
  curr = [...Object.keys(slength), ...Object.keys(tlength)];
  while (curr) {
    const letter = curr.shift();
    if ( !letter ) { break; }
    const slengthLetter = slength[letter]
    const tlengthLetter = tlength[letter]
    if (
      slengthLetter === undefined || 
      tlengthLetter === undefined || 
      slengthLetter !== tlengthLetter
    ) {
      valid = false
    }
  }
  return valid
};

console.log(isAnagram('a', 'ab'))