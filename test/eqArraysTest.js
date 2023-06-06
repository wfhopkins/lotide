const assertEqual = require("../assertEqual");
const eqArrays = require('../eqArrays');


describe("eqArray", function() {
  it("should print true when arrays match", function() {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const actual = eqArrays(arr1, arr2);
    const expected = true;
    assertEqual(actual, expected)
  });

  it("should print false when arrays DON'T match", function() {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 3, 5];
    const actual = eqArrays(arr1, arr2);
    const expected = false;
    assertEqual(actual, expected)
  });
});
