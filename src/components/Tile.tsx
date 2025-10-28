type TileProps = {
  letter?: "X" | "O";
};

const Tile = ({ letter, setIsPlayer1Turn, isPlayer1Turn }: TileProps) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid black",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => setIsPlayer1Turn(!isPlayer1Turn)}
    >
      <span style={{
        fontSize: '90px',
        fontWeight: 'bold'
      }}>{letter}</span>
    </div>
  );
};

export default Tile;
