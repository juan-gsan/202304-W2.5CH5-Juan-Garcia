export const createInitialBoard = (rows: number) => {
  const initialBoard = [];
  const row: number[] = [];

  for (let index: number = 0; index < rows; index++) {
    row.push(0);
    initialBoard.push(row);
  }

  return initialBoard;
};
