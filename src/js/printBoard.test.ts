import { printBoard } from "./printBoard.js";

describe("Given a printBoard function", () => {
  describe("When it receives an array of arrays", () => {
    test("Then it should return a string", () => {
      const expectedOutput = "";

      const actualOutput = printBoard();

      expect(typeof actualOutput).toStrictEqual(typeof expectedOutput);
    });
  });
});
