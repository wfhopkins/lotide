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

const letterPositions = function(sentence) {
  const results = {};
  for (let char of sentence) {
    if (results[char]) {
      results[char]++;
    } else {
        results[char] = 1;
    }
  }
  return results;
};

console.log(letterPositions("lighthouse"));
letterPositions("lighthouse");

// TEST CASES 
// // l i g h t h o u s e |  i  n  |  t  h  e  |  h  o  u  s  e
// // 0 1 2 3 4 5 6 7 8 9 |  11 12 |  14 15 16 |  18 19 20 21 22


// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// assertArraysEqual(letterPositions("hello").o, [4]);



// assertArraysEqual(letterPositions("paparazzi").p, [0, 2]);
// assertArraysEqual(letterPositions("paparazzi").a, [1, 3, 5]);
// assertArraysEqual(letterPositions("paparazzi").z, [6, 7]);
// assertArraysEqual(letterPositions("paparazzi").r, [4]);
// assertArraysEqual(letterPositions("paparazzi").i, [8]);


