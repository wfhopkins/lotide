// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// let eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require("./eqArrays")


const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key of Object.keys(obj1)) {
    if (!Object.keys(obj2).includes(key)) {
      return false;
    }
    if (Array.isArray(obj1[key])) {
      return Array.isArray(obj2[key]) ? eqArrays(obj1[key], obj2[key]) : false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


//Test for true
const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

//Test for false
const longSleeveShirtObject = {size: "medium", color: "red", sleevesLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

//Test Arrays as true values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

//Test Arrays as false values
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);
