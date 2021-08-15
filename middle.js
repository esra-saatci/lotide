const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let result = [];
  let middleIndex = (array.length - 1) / 2;
  if (array.length < 3) {
    return [];
  }

  if (array.length % 2 === 0) {
    result.push(array[Math.floor(middleIndex)], array[Math.round(middleIndex)]);
  } else {
    result.push(array[middleIndex]);
  }
  return result;
};

module.exports = middle;