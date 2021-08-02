const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let value of obj1) {
    if (Array.isArray(obj1[value]) === Array.isArray(obj2[value])) {
      eqArrays(obj1, obj2);
      return true;
    }
    return false;
  }
  return true;
};



const eqArrays = function(arr1, arr2) {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]});



