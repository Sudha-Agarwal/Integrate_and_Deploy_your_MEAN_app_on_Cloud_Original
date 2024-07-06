//import './setup.mjs';  // Ensure this runs before other tests
import { assert } from 'chai';
import {add}  from '../math.mjs';

describe('Math Functions - Test 1', function() {
  before(function() {
    console.log('Initialization: Test 1');
  });

  after(function() {
    console.log('Cleanup: Test 1');
  });

  describe('add function', function() {
    it('should add two numbers correctly', function() {
      const result = add(2, 3);
      assert.equal(result, 5);
    });
  });
});
