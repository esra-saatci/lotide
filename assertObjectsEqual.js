const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let value of obj1) {
    if (Array.isArray(obj1[value]) === Array.isArray(obj2[value])) {
      return true;
    }
    return false;
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
  
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false