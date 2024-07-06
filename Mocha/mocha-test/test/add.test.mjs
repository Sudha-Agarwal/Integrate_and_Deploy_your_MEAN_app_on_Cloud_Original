import { assert } from 'chai';
//const add = require('../math');
import {add} from '../src/math.mjs';

describe('Math Functions', function() {
  // Initialization (e.g., setting up resources)
  before(function() {
    console.log('Initialization: Setting up resources');
    // Code for initialization, like connecting to a database
  });

  // Cleanup (e.g., tearing down resources)
  after(function() {
    console.log('Cleanup: Tearing down resources');
    // Code for cleanup, like disconnecting from a database
  });

  describe('add function', function() {
    let input1, input2, result;

    // Setup before each test
    beforeEach(function() {
      console.log('Input: Setting up input values');
      // Input stage
      input1 = 2;
      input2 = 3;
    });

    // Cleanup after each test
    afterEach(function() {
      console.log('Cleanup: Resetting state');
      // Resetting state if necessary
      input1 = null;
      input2 = null;
      result = null;
    });

    it('should add two numbers correctly', function() {
      console.log('Processing: Running the add function');
      // Processing stage
      result = add(input1, input2);

      console.log('Output: Asserting the result');
      // Output stage
      assert.equal(result, 5);
    });

    it('should add two other numbers correctly', function() {
      input1 = 10;
      input2 = 20;
      result = add(input1, input2);
      assert.equal(result, 30);
    });
  });
});
