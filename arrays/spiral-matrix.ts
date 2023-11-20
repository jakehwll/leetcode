enum Direction {
  North,
  East,
  South,
  West
}

  // 0,0
  // 0,1
  // 0,2
  // 1,2
  // 2,2
  // 2,1
  // 2,0
  // 1,0
  // 1,1

function spiralOrder(matrix: number[][]): number[] {
  const MATRIX_WIDTH = matrix[0].length
  const MATRIX_HEIGHT = matrix.length
  let lookup: Array<{ x: number; y: number }> = 
    new Array(MATRIX_WIDTH * MATRIX_HEIGHT)
      .fill(undefined);
  let res: Array<number> = []

  let loc = {
    x: -1,
    y: 0,
  }
  let direction = Direction.East
  
  let count = 0
  while ( lookup.filter((v) => v === undefined).length > 0 ) {
    if ( count === 20 ) {
      console.log('wrapping up :D')
      break;
    }
    switch(direction) {
      case Direction.East:
        if (
          loc.x + 1 > MATRIX_WIDTH - 1 ||
          lookup[(loc.x + 1) + (loc.y * MATRIX_HEIGHT)] !== undefined
        ) {
          direction = Direction.South
          console.log('going south')
        } else {
          const lookupRes = { x: loc.x + 1, y: loc.y };
          loc = lookupRes
          lookup[loc.x + (loc.y * MATRIX_HEIGHT)] = lookupRes
          const item = matrix[lookupRes.y][lookupRes.x];
          console.log(item, loc);
          res.push(item)
        }
        break;
      case Direction.South:
        if (
          loc.y + 1 > MATRIX_HEIGHT - 1 ||
          lookup[loc.x + (loc.y + 1) * MATRIX_HEIGHT] !== undefined
        ) {
          direction = Direction.West;
          console.log("going west");
        } else {
          const lookupRes = { x: loc.x, y: loc.y + 1 };
          loc = lookupRes;
          lookup[loc.x + loc.y * MATRIX_HEIGHT] = lookupRes;
          const item = matrix[lookupRes.y][lookupRes.x];
          console.log(item, loc);
          res.push(item);
        }
        break;
      case Direction.West:
        if (
          loc.x - 1 < 0 ||
          lookup[(loc.x - 1) + loc.y * MATRIX_HEIGHT] !== undefined
        ) {
          console.log(loc.x - 1)
          direction = Direction.North;
          console.log("going north");
          console.log(
            loc.x - 1 < 0,
            lookup[loc.x - 1 + loc.y * MATRIX_HEIGHT] !== undefined
          );
        } else {
          const lookupRes = { x: loc.x - 1, y: loc.y };
          loc = lookupRes;
          lookup[loc.x + loc.y * MATRIX_HEIGHT] = lookupRes;
          const item = matrix[lookupRes.y][lookupRes.x];
          console.log(item, loc);
          res.push(item);
        }
        break;
      case Direction.North:
        if (
          loc.y - 1 < 0 ||
          lookup[loc.x + (loc.y - 1) * MATRIX_HEIGHT] !== undefined
        ) {
          direction = Direction.East;
          console.log("going east");
        } else {
          const lookupRes = { x: loc.x, y: loc.y - 1 };
          loc = lookupRes;
          lookup[loc.x + loc.y * MATRIX_HEIGHT] = lookupRes;
          const item = matrix[lookupRes.y][lookupRes.x];
          console.log(item, loc);
          res.push(item);
        }
        break;
    }
    count++;
    // console.log(loc)
  }

  return res
}

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);