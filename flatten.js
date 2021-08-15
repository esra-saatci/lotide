const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let flattenedArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(number => {
        flattenedArray.push(number);
      });
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

module.exports = flatten;