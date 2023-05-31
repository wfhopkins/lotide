let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

let assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log("Arrays are equal:", arr1, arr2);
  } else {
    console.log("Arrays are not equal:", arr1, arr2);
  }
  return eqArrays(arr1, arr2);
};

let without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let foundItem = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        foundItem = true;
        break;
      }
    }
    if (!foundItem) {
      result.push(source[i]);
    }
  }
  return result;
};
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

//TEST CASES
// const numbers = [7, 5, 9];
// without(numbers, [7, 9]);
// assertArraysEqual(numbers, [7, 5, 9]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);