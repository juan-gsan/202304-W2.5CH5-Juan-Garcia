export const createBoard = () => {
  const numberOfRows: number = 5;

  const rows: number[] = [];
  const board = [];

  for (let index: number = 0; index < numberOfRows; index++) {
    rows.push(0);
    board.push(rows);
  }
};
