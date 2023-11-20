type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let count: number = init
  return {
    increment: (): number => {
      count++;
      return count;
    },
    decrement: (): number => {
      count--;
      return count;
    },
    reset: (): number => {
      count = init
      return count
    }
  }
}

const counter = createCounter(5)
counter.increment(); // 6
console.log(counter)
counter.reset(); // 5
console.log(counter)
counter.decrement(); // 4
console.log(counter)