let assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log("Arrays are equal:", arr1, arr2);
  } else {
    console.log("Arrays are not equal:", arr1, arr2);
  }
  return eqArrays(arr1, arr2);
};

let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      newArray = newArray.concat(flatten(arrays[i]));
    } else {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);