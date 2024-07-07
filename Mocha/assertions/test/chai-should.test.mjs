// Example.test.js

// Import Chai assertion library with should interface
//const { should } = require('chai');
import {should} from 'chai';
should(); // Enables should syntax

// Sample objects and arrays for testing
const obj1 = { foo: 'bar', baz: { nested: 'object' } };
const arr1 = [1, 2, 3];

// Test suite using Chai should interface
describe('Chai should interface examples', function() {

  it('should assert deep equality for objects', function() {
    obj1.should.deep.equal({ foo: 'bar', baz: { nested: 'object' } });
  });

  it('should assert type', function() {
    obj1.should.be.an('object');
    arr1.should.be.an('array').that.includes(2); // Chaining and inclusion check
  });

  it('should assert length', function() {
    arr1.should.have.lengthOf(3);
    'hello'.should.have.lengthOf(5);
  });

  it('should assert string includes', function() {
    'hello world'.should.include('world');
    'hello'.should.not.include('world');
  });

  it('should assert property existence', function() {
    obj1.should.have.property('foo');
    obj1.should.have.nested.property('baz.nested');
  });

  it('should assert approximate equality', function() {
    (0.1 + 0.2).should.be.closeTo(0.3, 0.0001);
  });

  it('should assert boolean value', function() {
    true.should.be.true;
    false.should.not.be.true;
  });

  /*it('should assert null and undefined', function() {
    should(null).be.null;
    should(undefined).not.exist; // Alias for undefined
  });*/

});
