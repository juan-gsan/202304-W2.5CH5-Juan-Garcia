export const createBoard = (rows: number, columns: number) => {
  const board = [];

  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < columns; x++) {
      row.push(Math.round(Math.random()));
    }

    board.push(row);
  }

  console.log(board);
};
