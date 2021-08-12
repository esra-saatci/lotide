const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // Fail
assertArraysEqual(["Esra", "Baran"], ["Esra", "Baran"]); // Pass