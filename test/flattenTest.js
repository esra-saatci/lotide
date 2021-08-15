const assert = require('chai').assert;
const flatten = require('../flatten');


describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5] for [1, 2, [3, 4], 5]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
  });
  
});