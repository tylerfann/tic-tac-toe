import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { updateBoard, getInitialBoard, getWinningPlayer } from "./utils/board";

function App() {
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [board, setBoard] = useState(getInitialBoard());
  const [winner, setWinner] = useState();

  const handlePlayerMove = ({ tileIndex, rowIndex, letter }) => {
    if (!letter) {
      const newBoard = updateBoard({
        board,
        rowIndex,
        tileIndex,
        isPlayer1Turn,
      });

      setBoard(newBoard);
      const winner = getWinningPlayer(newBoard);

      if (winner) {
        setWinner(winner);
      }
      setIsPlayer1Turn(!isPlayer1Turn);
    }
  };

  const handlePlayAgain = () => {
    setBoard(getInitialBoard());
    setIsPlayer1Turn(true);
    setWinner(undefined);
  };

  if (winner) {
    return (
      <div>
        <h1>{`Player ${winner === "X" ? "1" : "2"} wins!`}</h1>
        <button onClick={handlePlayAgain}>Play again</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>Whose turn: {isPlayer1Turn ? "Player 1" : "Player 2"}</h3>
      <Board board={board} handlePlayerMove={handlePlayerMove} />
    </div>
  );
}

export default App;
