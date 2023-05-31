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

//function to find the middle value/values in an array
const middle = function(arr) {
  const midArray = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 0) {
    return [arr[midArray - 1], arr[midArray]];
  } else {
    return [arr[midArray]];
  }
};
console.log(middle([1, 4, 7, 10, 13]));
middle([1, 4, 7, 10, 13]);


//TEST CASES

//array less than 3
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]),[]);

//array odd number
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// //array even number
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);