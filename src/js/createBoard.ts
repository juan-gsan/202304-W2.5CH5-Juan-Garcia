export const createBoard = () => {
  const numberOfRows: number = 5;

  const rows: number[] = [];
  const columns = [];

  for (let index: number = 0; index < numberOfRows; index++) {
    rows.push(0);
    columns.push(rows);
  }

  console.log(columns);
};

createBoard();
