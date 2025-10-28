import { useState } from 'react'
import './App.css'
import Board from './components/Board';
import { updateBoard, getInitialBoard } from './utils/board';

// keep track of the board
// keep track of player turn
// player 1 is always "X" 
// handle clicking the board
// determine winner

const players = {
  1: 'Player 1',
  2: 'Player 2',
}

function App() {
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [board, setBoard] = useState(getInitialBoard());

  const handlePlayerMove = ({
    tileIndex,
    rowIndex 
  }) => {
     // update the board
    const newBoard = updateBoard({
      board,
      rowIndex,
      tileIndex,
      isPlayer1Turn,
    });

    setBoard(newBoard);

    console.log('==== board', board);

    // console.log('==== newBoard', newBoard);
        
        // determine if theres a winner or game over


        // set the player turn

        setIsPlayer1Turn(!isPlayer1Turn)
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>Whose turn: {isPlayer1Turn ? 'Player 1' : 'Player 2'}</h3>
      <Board
        board={board}
        handlePlayerMove={handlePlayerMove}
      />
    </div>
  )
}

export default App
