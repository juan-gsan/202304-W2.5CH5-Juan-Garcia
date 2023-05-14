export const createInitialBoard = (rows: number, columns: number) => {
  const initialBoard = [];

  for (let x: number = 0; x < rows; x++) {
    const row: number[] = [];
    for (let y = 0; y < columns; y++) {
      row.push(0);
    }

    initialBoard.push(row);
  }

  return initialBoard;
};
