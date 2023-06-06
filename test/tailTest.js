const assert = require("chai").assert;
const tail = require("../tail.js");

describe("tail", function() {
  it("should return (7, 2, 9) when given (3, 7, 2, 9)", function() {
    const arr1 = [3, 7, 2, 9];
    const actual = tail(arr1);
    const expected = [7, 2, 9];
    assert.deepEqual(actual, expected)
  });

  it("should return the (Doody, Dandy) when given (Howdy, Doody, Dandy)", function() {
    const arr2 = ["Howdy", "Doody", "Dandy"];
    const actual = tail(arr2);
    const expected = ["Doody", "Dandy"];
    assert.deepEqual(actual, expected)
  });
});
