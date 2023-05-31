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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);

assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["dog", "cat", "fish"], ["dog", "cat", "fish"]);
assertArraysEqual([1, -2, 3], [1, 2, 3]);
assertArraysEqual([1, -2, 4], [1, -2, 4]);