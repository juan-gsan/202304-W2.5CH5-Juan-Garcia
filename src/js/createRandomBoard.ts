export const createRandomBoard = (rows: number, columns: number) => {
  const randomBoard = [];

  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < columns; x++) {
      row.push(Math.round(Math.random()));
    }

    randomBoard.push(row);
  }

  return randomBoard;
};
