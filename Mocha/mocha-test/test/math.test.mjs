//const assert = require('chai').assert;
import { assert } from 'chai';
function add(a, b) {
  return a + b;
}

describe('Math Functions', () => {
  describe('add function', () => {
    it('should add two numbers correctly', () => {
      const result = add(2, 3);
      assert.equal(result, 5); // Assertion using Chai
    });
  });
});
