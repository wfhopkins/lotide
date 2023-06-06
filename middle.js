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

module.exports = middle;