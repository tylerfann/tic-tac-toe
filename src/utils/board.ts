export const getInitialBoard = () => [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const updateBoard = ({ board, rowIndex, tileIndex, isPlayer1Turn }) => {
  const boardCopy = [...board];
  boardCopy[rowIndex][tileIndex] = isPlayer1Turn ? "X" : "O";

  return boardCopy;
};

const checkIfWinner = (arr) =>
  !arr.includes("") && arr.every((str) => str === arr[0]);

export const getWinningPlayer = (board) => {
  let winner;

  // check horizontal winner
  board.forEach((row) => {
    if (checkIfWinner(row)) {
      winner = row[0];
    }
  });

  // check vertical winner
  const column1 = [];
  const column2 = [];
  const column3 = [];
  board.forEach((row) => {
    column1.push(row[0]);
    column2.push(row[1]);
    column3.push(row[2]);
  });
  [column1, column2, column3].forEach((column) => {
    if (checkIfWinner(column)) {
      winner = column[0];
    }
  });

  // check diagnol winner
  const diagnolLeftDown = [board[0][0], board[1][1], board[2][2]];
  const diagnolRightDown = [board[0][2], board[1][1], board[2][0]];

  [diagnolLeftDown, diagnolRightDown].forEach((diagnol) => {
    if (checkIfWinner(diagnol)) {
      winner = diagnol[0];
    }
  });

  return winner;
};
