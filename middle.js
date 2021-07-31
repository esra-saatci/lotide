const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

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


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]); // => 2
assertArraysEqual(middle([1, 2]), []); // => []

