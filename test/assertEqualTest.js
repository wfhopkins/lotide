const assertEqual = require("../assertEqual");

describe("assertEqual", function() {
  it("should return passing or failing depending on actual vs expected output"), function() {
    const arr1 = [3, 7, 2, 9];
    const actual = tail(arr1);
    const expected = [7, 2, 9];
    assertEqual(actual, expected)
  }

  it("should return passing or failing depending on actual vs expected output"), function() {
    const arr1 = [3, 7, 2, 9];
    const actual = tail(arr1);
    const expected = [7, 2, 9];
    assertEqual(actual, expected)
  }
});
