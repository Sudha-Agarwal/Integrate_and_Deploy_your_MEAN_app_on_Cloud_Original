// Import Mocha and Node.js assert module
const assert = require('assert');

// Test Suite
describe('Deep Equality Assertions with Node.js assert', function() {

    // Deep Equality Assertions
    /*it('should check deep equality', function() {
        const actual = { a: 1, b: { c: 2 } };
        const expected = { a: 1, b: { c: 2 } };
        assert.deepEqual(actual, expected, 'Objects should be deeply equal'); // Will pass

        const actualArray = [1, [2, 3], 4];
        const expectedArray = [1, [2, 3], 4];
        assert.deepEqual(actualArray, expectedArray, 'Arrays should be deeply equal'); // Will pass

        const notExpected = { a: 1, b: { c: 3 } };
        assert.notDeepEqual(actual, notExpected, 'Objects should not be deeply equal'); // Will pass
    });*/

    // Example where shallow equality would fail but deep equality would pass
   /* it('should fail shallow equality but pass deep equality', function() {
        const actual = { a: 1, b: { c: 3 } };
        const expected = { a: 1, b: { c: 2 } };
        assert.equal(actual, expected, 'Nested property equality should pass'); // Will pass
        assert.deepEqual(actual, expected, 'Objects should be deeply equal'); // Will pass
    });

    // Example where deep equality would fail
    it('should fail deep equality', function() {
        const actual = { a: 1, b: { c: 2 } };
        const expected = { a: 1, b: { c: 3 } };
        assert.notDeepEqual(actual, expected, 'Objects should not be deeply equal'); // Will pass
    });
*/
    // Equality Assertions
    it('should check equality but fail deep equality', function() {
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };

        const actual = { b: obj1 };
        const expected = { b: obj2 };

        // Loose equality - will pass because the references to obj1 and obj2 are not compared
        assert.equal(actual.b, expected.b, 'Loose equality should pass');

        // Deep equality - will fail because obj1 and obj2 have the same values but are different objects
        assert.deepEqual(actual, expected, 'Deep equality should fail');
    });
});
