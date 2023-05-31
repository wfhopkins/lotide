const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let results = {};
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

//TEST CASES

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestGamesByConsole = {
  ps4: "Last of Us",
  n64: "Ocarina of Time",
  switch: "Mario Kart",
  xbox: "Halo"
};

assertEqual(findKeyByValue(bestGamesByConsole, "Last of Us"), "ps4");
assertEqual(findKeyByValue(bestGamesByConsole, "Ocarina of Time"), "n64");
assertEqual(findKeyByValue(bestGamesByConsole, "Halo"), "xbox");
assertEqual(findKeyByValue(bestGamesByConsole, "Fortnite"), undefined);