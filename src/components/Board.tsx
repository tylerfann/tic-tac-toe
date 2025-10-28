import Tile from "../components/Tile";

const BOARD = [Array(3).fill(""), Array(3).fill(""), Array(3).fill("")];

const Row = ({ tiles, setIsPlayer1Turn, isPlayer1Turn }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {tiles.map((el) => (
        <Tile letter={el} setIsPlayer1Turn={setIsPlayer1Turn} isPlayer1Turn={isPlayer1Turn} />
      ))}
    </div>
  );
};
const Board = ({ setIsPlayer1Turn, isPlayer1Turn }) => {
  return (
    <div>
      {BOARD.map((rows) => (
        <Row tiles={rows} setIsPlayer1Turn={setIsPlayer1Turn} isPlayer1Turn={isPlayer1Turn} />
      ))}
    </div>
  );
};

export default Board;
