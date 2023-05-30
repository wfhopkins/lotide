const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(data) {
  let result = [];
  for (let i = 1; i < data.length; i++) {
    result.push(data[i]);
  }
  return result;
};
console.log(tail([3, 7, 2, 9]));
console.log(tail([]));
console.log(tail(["Howdy", "Doody", "Dandy"]));

const numbers = [3, 7, 2, 9];
tail(numbers);
assertEqual(numbers.length, 4);
