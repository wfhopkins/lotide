const tail = function(data) {
  let result = [];
  for (let i = 1; i < data.length; i++) {
    result.push(data[i]);
  }
  return result;
};

module.exports = tail;