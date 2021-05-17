import { sumTwoNum } from './main.js';

describe("sumTwoNum tests", () => {
it("Should add two numbers together", () => {
  const result = sumTwoNum(10, 5);

  expect(result).toBe(15);
})
} )