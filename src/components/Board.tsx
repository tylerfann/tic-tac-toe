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
          key={`row-${rowIndex}-tile-${index}`}
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
      {BOARD.map((tiles, index) => (
        <Row
          key={`row-${index}`}
          board={board}
          tiles={tiles}
          handlePlayerMove={handlePlayerMove}
          rowIndex={index}
        />
      ))}
    </div>
  );
};

export default Board;
