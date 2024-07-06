//import './setup.mjs';  // Ensure this runs before other tests
import { assert } from 'chai';
import {add}  from '../math.mjs';

describe('Math Functions - Test 2', function() {
  before(function() {
    console.log('Initialization: Test 2');
  });

  after(function() {
    console.log('Cleanup: Test 2');
  });

  describe('add function', function() {
    it('should add two other numbers correctly', function() {
      const result = add(10, 20);
      assert.equal(result, 30);
    });
  });
});
