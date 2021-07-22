const eqArrays = function(arr1, arr2) {
  if (arr1.length === 0 && arr2.length > 0) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};
const middle = function(array) {
  let arr = [];
  let middleEl = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    arr.push(array[middleEl - 1], array[middleEl]);
  } else if (array.length % 2 !== 0) {
    arr.push(array[Math.floor(middleEl)]);
  }
  return arr;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [3]); // => 2
assertArraysEqual(middle([1, 2]), []); // => []