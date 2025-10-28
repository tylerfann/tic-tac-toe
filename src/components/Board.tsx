import Tile from "../components/Tile";

const BOARD = [Array(3).fill(""), Array(3).fill(""), Array(3).fill("")];

const Row = ({ board, tiles, handlePlayerMove, rowIndex }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {tiles.map((el, index) => (
        <Tile
          letter={`${board[rowIndex][index]}`}
          handlePlayerMove={handlePlayerMove}
          tileIndex={index}
          rowIndex={rowIndex}
        />
      ))}
    </div>
  );
};
const Board = ({ board, handlePlayerMove }) => {
  return (
    <div>
      {BOARD.map((rows, index) => (
        <Row
          board={board}
          tiles={rows}
          handlePlayerMove={handlePlayerMove}
          rowIndex={index}
        />
      ))}
    </div>
  );
};

export default Board;
