const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail.js");

describe("tail", function() {
  it("should return all but the first item in an array when given an array", function() {
    const arr1 = [3, 7, 2, 9];
    const actual = tail(arr1);
    const expected = [7, 2, 9];
    assertArraysEqual(actual, expected)
  });

  it("should return all but the first item in an array when given an array", function() {
    const arr2 = ["Howdy", "Doody", "Dandy"];
    const actual = tail(arr2);
    const expected = ["Doody", "Dandy"];
    assertArraysEqual(actual, expected)
  });
});
