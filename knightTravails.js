let squares = [];

class Square {
  constructor(pos) {
    this.pos = pos;
    this.moves = null;
    this.visited = false;
    this.dist = null;
    this.pred = null;
  }
}

const movePatterns = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
];

function generateMoves(h, v) {
  let moves = [];

  for (const [dh, dv] of movePatterns) {
    const newH = h + dh;
    const newV = v + dv;

    if (newH >= 0 && newH <= 7 && newV >= 0 && newV <= 7) {
      moves.push([newH, newV]);
    }
  }

  return moves;
}

function generateSquares() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const pos = [i, j];
  
      const square = new Square(pos);
      square.moves = generateMoves(i, j);
      squares.push(square);
    }
  }
}

function findShortestPath(src, dest) {
  let queue = [];

  src = squares.find(square => square.pos.toString() === src.toString());

  src.visited = true;
  src.dist = 0;
  queue.push(src);

  while (queue.length > 0) {
    let cur = queue[0];
    queue.shift();

    for (let move of cur.moves) {
      move = squares.find(square => square.pos.toString() === move.toString());

      if (!move.visited) {
        move.visited = true;
        move.dist = cur.dist + 1;
        move.pred = cur;
        queue.push(move);

        if (move.pos === dest) return;
      }
    }
  }
}

function knightMoves(src, dest) {
  generateSquares();
  findShortestPath(src, dest);

  let path = [];

  dest = squares.find(square => square.pos.toString() === dest.toString());
  
  let cur = dest;
  path.push(cur.pos);

  while (cur.pred) {
    path.unshift(cur.pred.pos);
    cur = cur.pred;
  }

  console.log(`You made it in ${dest.dist}. Here's your path:`);
  for (let i = 0; i < path.length; i++) console.log(path[i]);
}

knightMoves([0, 0], [5, 6]);
