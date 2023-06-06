//Code for assertArraysEqual
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

//Map function below
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

const results = map(words, word => word[0]);
assertArraysEqual(map(words, word => word[0]), results);

const numbers = ["34", "61", "891", "4", "20", "0"];
assertArraysEqual(map(numbers, num => num[0]), ["3", "6", "8", "4", "2", "0"]);

const trees = ["Maple", "Walnut", "Pine", "Arbutus", "Willow"];
assertArraysEqual(map(trees, tree => tree[0]), ["M", "W", "P", "A", "W"]);
