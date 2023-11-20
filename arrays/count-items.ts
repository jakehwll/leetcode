function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  return items
    .map((v) => ({
      type: v[0],
      color: v[1],
      name: v[2]
    }))
    .filter((v: any) => {
      return v[ruleKey] === ruleValue;
    })
    .length;
}

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);