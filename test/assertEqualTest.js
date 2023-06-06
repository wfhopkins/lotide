const assertEqual = require("../assertEqual");

describe("assertEqual", function() {
  it("should return failing if actual and expected are NOT equal ", function() {
    const data = "orses"
    const actual = data;
    const expected = "horses";
    assertEqual(actual, expected)
  });

  it("should return passing passing if actual and expected are equal", function() {
    const data = (3, 7, 2, 9);
    const actual = data;
    const expected = (3, 7, 2, 9);
    assertEqual(actual, expected)
  });
});