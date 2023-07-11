let possibleMovesList = {};

const knightMovePatterns = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
];

function generatePossibleMoves(h, v) {
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

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const position = `${i}, ${j}`;
    possibleMovesList[position] = generatePossibleMoves(i, j);
  }
}

console.log(possibleMovesList);
