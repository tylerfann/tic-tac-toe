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

// const checkIfWinner = (arr) => {
//   if (!row.includes("") && row.every((str) => str === row[0])) {
//     winner = row[0];
//   }
// }

export const getWinningPlayer = (board) => {
  let winner;
  // horizontal
  board.forEach((row) => {
    if (!row.includes("") && row.every((str) => str === row[0])) {
      winner = row[0];
    }
  });
  // vertical
  const column1 = [];
  const column2 = [];
  const column3 = [];
  board.forEach((row) => {
    column1.push(row[0]);
    column2.push(row[1]);
    column3.push(row[2]);
  });
  [column1, column2, column3].forEach((column) => {
    if (!column.includes("") && column.every((str) => str === column[0])) {
      winner = column[0];
    }
  });

  // diagnol
  const diagnolLeftDown = [board[0][0], board[1][1], board[2][2]];
  const diagnolRightDown = [board[0][2], board[1][1], board[2][0]];

  [diagnolLeftDown, diagnolRightDown].forEach((diagnol) => {
    if (!diagnol.includes("") && diagnol.every((str) => str === diagnol[0])) {
      winner = diagnol[0];
    }
  });

  console.log('==== diagnols', {
    diagnolLeftDown,diagnolRightDown
  })

  return winner;
};
