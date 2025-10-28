import { useState } from 'react'
import './App.css'
import Board from './components/Board';

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
  const [board, setBoard] = useState()

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>Whose turn: {isPlayer1Turn ? 'Player 1' : 'Player 2'}</h3>
      <Board
        setIsPlayer1Turn={setIsPlayer1Turn}
        isPlayer1Turn={isPlayer1Turn}
      />
    </div>
  )
}

export default App
