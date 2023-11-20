type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(
  filter(
    [0, 5, 10, 20, 30], 
    function greaterThan10(n) {
      console.log('removing ', n)
      return n > 10;
    })
);