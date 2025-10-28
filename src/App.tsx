import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { updateBoard, getInitialBoard, getWinningPlayer } from "./utils/board";

// keep track of the board
// keep track of player turn
// player 1 is always "X"
// handle clicking the board
// determine winner

function App() {
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [board, setBoard] = useState(getInitialBoard());

  const handlePlayerMove = ({ tileIndex, rowIndex, letter}) => {
    if (!letter) {
      const newBoard = updateBoard({
        board,
        rowIndex,
        tileIndex,
        isPlayer1Turn,
      });
  
      setBoard(newBoard);
      const winner = getWinningPlayer(newBoard);
      setIsPlayer1Turn(!isPlayer1Turn);
    }
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>Whose turn: {isPlayer1Turn ? "Player 1" : "Player 2"}</h3>
      <Board board={board} handlePlayerMove={handlePlayerMove} />
    </div>
  );
}

export default App;
