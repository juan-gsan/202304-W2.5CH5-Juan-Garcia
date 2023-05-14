import { countTokenStatus } from "./countTokenStatus.js";

describe("Given a countTokenStatus function", () => {
  describe("When it receives [[0,1,1],[0,1,0],[1,0,0]]", () => {
    test("Then it should return [[2,2,2],[3,3,3],[1,2,1]]", () => {
      const receivedElement = [
        [0, 1, 1],
        [0, 1, 0],
        [1, 0, 0],
      ];
      const expectedOutput = [
        [2, 2, 2],
        [3, 3, 3],
        [1, 2, 1],
      ];

      const actualOutput = countTokenStatus(receivedElement);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
});
