export const createInitialBoard = (rows, columns) => {
    const initialBoard = [];
    for (let x = 0; x < rows; x++) {
        const row = [];
        for (let y = 0; y < columns; y++) {
            row.push(0);
        }
        initialBoard.push(row);
    }
    return initialBoard;
};
