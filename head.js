let actual = "Lighthouse Labs";
let expected = "Bootcamp";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }

};

const head = function(_array){
  return _array[0];
};


assertEqual(head(["Lighthouse Labs", "Bootcamp","Labs"]),"Lighthouse Labs");                                                                                                                                                                                                                                             