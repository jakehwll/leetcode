function addBinary(a: string, b: string): string {
  const aNum = parseInt(a, 2);
  const bNum = parseInt(b, 2);
  const res = aNum + bNum;
  return (res >>> 0).toString(2);
}

console.log(addBinary("11", "1"));