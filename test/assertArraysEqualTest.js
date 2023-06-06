const assertArraysEqual = require("../assertArraysEqual");

describe("assertArraysEqual", function() {
  it("should return true if arrays are equal", function() {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const actual = assertArraysEqual([1, 2, 3], [1, 2, 3])
    const expected = true;
    assertArraysEqual(actual, expected)
  });

  it("should return false if arrays are NOT equal", function() {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    const actual = assertArraysEqual([1, 2, 3], [1, 2, 4])
    const expected = false;
    assertArraysEqual(actual, expected)
  });
});