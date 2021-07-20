let actual = "Lighthouse Labs";
let expected = "Bootcamp";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};



assertEqual("Lighthouse Labs", "Bootcamp");
