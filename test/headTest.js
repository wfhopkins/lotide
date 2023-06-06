const assertArraysEqual = require("../assertArraysEqual")
const head = require("../head.js");

describe("head", function() {
  it("should return the first item in a given array", function() {
    const arr1 = [3, 7, 2, 9];
    const actual = head(arr1);
    const expected = [3];
    assertArraysEqual(actual, expected)
  })

  it("should return the first item in a given array", function() {
    const arr2 =["It's", "A", "Wonderful", "Life"];
    const actual = head(arr2);
    const expected = ["It's"];
    assertArraysEqual(actual, expected)
  })
});
