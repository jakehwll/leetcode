function isValid(s: string): boolean {
  if ( s.length % 2 !== 0 ) {
    return false
  }

  const opener = "[{("
  const partners: Record<string, string> = {
    "]": "[",
    "}": "{",
    ")": "("
  }
  const openStack: string[] = []

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if ( opener.includes(element) ) {
      openStack.push(element)
    } else {
      const prevOpenedStack = openStack.pop()
      if (!prevOpenedStack) return false;
      if (prevOpenedStack !== partners[element]) {
        return false
      }
    }
  }

  return openStack.length === 0
};

// console.log(true, isValid("()"));
// console.log(true, isValid("()[]{}"));
// console.log(false, isValid("(]"));
// console.log(true, isValid("(([[{{}}]]))"))
// console.log(false, isValid("{(})"))
console.log(false, isValid("{"))
console.log(true, isValid("{}}"))