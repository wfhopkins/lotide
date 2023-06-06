const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

describe("middle", function() {
  it("should print nothing when array is less than 3", function() {
    const arr1 = [1];
    const actual = middle(arr1);
    const expected = [];
    assertArraysEqual(actual, expected)
  });

  it("should print middle number when array is odd", function() {
    const arr1 = [1, 2, 3, 4, 5];
    const actual = middle(arr1);
    const expected = [3];
    assertArraysEqual(actual, expected)
  });

  it("should print both numbers at the middle when array is even", function() {
    const arr1 = [2, 4, 6, 8, 10, 12];
    const actual = middle(arr1);
    const expected = [6, 8];
    assertArraysEqual(actual, expected)
  });
});