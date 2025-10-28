const INITIAL_BOARD = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const getInitialBoard = () => INITIAL_BOARD;

export const updateBoard = ({ board, rowIndex, tileIndex, isPlayer1Turn }) => {
  const boardCopy = [...board];
  boardCopy[rowIndex][tileIndex] = isPlayer1Turn ? "X" : "O";

  return boardCopy;
};

export const getWinningPlayer = (board) => {
  let winner;
  // horizontal
  board.forEach((row) => {
    // check if rows not empty
    if (!row.every((letter) => letter === '')) {
        
    }
    console.log('==== row', row);
    if (row.every((letter) => letter === row[0])) {
        // console.log('==== hiii', {
        //     board,
        //     winner,
        //     firstIndexInRow: row[0],
        //     row,
        // });
        winner = row[0];
    }
  });

  return winner;
  // check vertical
  // check diagnol
};
