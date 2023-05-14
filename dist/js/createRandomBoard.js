export const createRandomBoard = (rows, columns) => {
    const randomBoard = [];
    for (let x = 0; x < rows; x++) {
        const row = [];
        for (let y = 0; y < columns; y++) {
            row.push(Math.round(Math.random()));
        }
        randomBoard.push(row);
    }
    return randomBoard;
};
