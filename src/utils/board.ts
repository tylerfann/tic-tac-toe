const INITIAL_BOARD = [
    ['','',''],
    ['','',''],
    ['','',''],
];

export const getInitialBoard = () => INITIAL_BOARD;

export const updateBoard = ({
    board,
    rowIndex,
    tileIndex,
    isPlayer1Turn,
}) => {
    console.log('====== updateBoard', {
        board,
        rowIndex,
        tileIndex,
        isPlayer1Turn,
    });

    const boardCopy = [...board];

    boardCopy[rowIndex][tileIndex] = isPlayer1Turn ? 'X' : 'O';

    return boardCopy;
}