let eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require("util").inspect;
  const result = eqObjects(obj1, obj2);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
  return eqObjects(obj1, obj2);
};

const obj1 = { name: "John", age: 25 };
const obj2 = { name: "John", age: 25 };

assertObjectsEqual(obj1, obj2);


const obj3 = { name: "John", age: 25 };
const obj4 = { name: "John", age: 24 };

assertObjectsEqual(obj3, obj4);