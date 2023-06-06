const assert = require("chai").assert;
const head = require("../head.js");

describe("head", () => {
  it("should return the first item in a given array", () => {
    const arr1 = [3, 7, 2, 9];
    const actual = head(arr1);
    const expected = 3;
    assert.strictEqual(actual, expected)
  });

  it("returns a single character for an array with one character", () => {
    const arr1 = [5];
    const actual = head(arr1);
    const expected = 5;
    assert.strictEqual(actual, expected)
  });

  it("should return the first item in a given array", () => {
    const arr2 =["It\'s", "A", "Wonderful", "Life"];
    const actual = head(arr2);
    const expected = "It\'s";
    assert.strictEqual(actual, expected)
  });
});
