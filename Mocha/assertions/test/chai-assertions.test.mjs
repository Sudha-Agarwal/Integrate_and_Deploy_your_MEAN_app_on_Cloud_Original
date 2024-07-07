// Example.test.js

// Import Chai assertion library
//const { expect } = require('chai');
import {expect} from 'chai';

// Sample objects and arrays for testing
const obj1 = { foo: 'bar', baz: { nested: 'object' } };
const obj2 = { foo: 'bar', baz: { nested: 'object' } };
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

// Test suite using Chai matchers
describe('Chai Matchers Example', function() {
  
  it('should assert strict equality', function() {
    expect(obj1).to.deep.equal(obj2); // Deep equality check for objects
    expect(arr1).to.not.equal(arr2); // Not strict equality check for arrays
  });

  it('should assert type', function() {
    expect(obj1).to.be.an('object');
    expect(arr1).to.be.an('array').that.includes(2); // Chaining and inclusion check
  });

  it('should assert length', function() {
    expect(arr1).to.have.lengthOf(3);
    expect('hello').to.have.lengthOf(5);
  });

  it('should assert string includes', function() {
    expect('hello world').to.include('world');
    expect('hello').to.not.include('world');
  });

  it('should assert property existence', function() {
    expect(obj1).to.have.property('foo');
    expect(obj1).to.have.nested.property('baz.nested');
  });

  it('should assert approximate equality', function() {
    expect(0.1 + 0.2).to.be.closeTo(0.3, 0.0001);
  });

  it('should assert boolean value', function() {
    expect(true).to.be.true;
    expect(false).to.not.be.true;
  });

  it('should assert null and undefined', function() {
    expect(null).to.be.null;
    expect(undefined).to.not.exist; // Alias for undefined
  });

});
