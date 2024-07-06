// Import Mocha and Node.js assert module
const assert = require('assert');

// Test Suite
describe('Assertion Examples with Node.js assert', function() {

    // Equality Assertions
    it('should check equality', function() {
        assert.equal(2 + 2, 4, '2 + 2 should equal 4'); // Loose equality
        assert.strictEqual(2 + 2, 4, '2 + 2 should strictly equal 4'); // Strict equality
        assert.notEqual(2 + 2, 5, '2 + 2 should not equal 5'); // Loose inequality

        assert.equal('4', 4, '"4" loosely equals 4'); // Loose equality - will pass
        assert.strictEqual('4', 4, '"4" strictly equals 4'); // Strict equality - will fail
    });

    // Deep Equality Assertions
    it('should check deep equality', function() {
        assert.deepEqual({a: 1}, {a: 1}, 'Objects should be deeply equal'); // Deep equality
        assert.notDeepEqual({a: 1}, {a: 2}, 'Objects should not be deeply equal'); // Deep inequality
    });

    

    // Truthiness Assertions
    it('should check truthiness', function() {
        assert.strictEqual(true, true, 'true should be true'); // isTrue equivalent
        assert.strictEqual(false, false, 'false should be false'); // isFalse equivalent
        assert.ok(1, '1 is truthy'); // isOk equivalent
        assert.ok(!0, '0 is falsy'); // isNotOk equivalent
    });

    // Type Assertions
    it('should check types', function() {
        assert.strictEqual(typeof 'hello', 'string', '"hello" is a string');
        assert.strictEqual(typeof 123, 'number', '123 is a number');
        assert.strictEqual(Array.isArray([]), true, '[] is an array');
        assert.strictEqual(typeof {}, 'object', '{} is an object');
    });

    // Inclusion Assertions
    it('should check inclusion', function() {
        assert.ok([1, 2, 3].includes(2), '[1, 2, 3] includes 2');
        assert.ok('foobar'.includes('foo'), '"foobar" includes "foo"');
    });

    // Length Assertions
    it('should check lengths', function() {
        assert.strictEqual([1, 2, 3].length, 3, '[1, 2, 3] has length of 3');
        assert.strictEqual('hello'.length, 5, '"hello" has length of 5');
    });

    // Property Assertions
    it('should check properties', function() {
        const obj = {a: 1, b: 2};
        assert.ok('a' in obj, 'object has property "a"');
        assert.ok(!('c' in obj), 'object does not have property "c"');
        assert.strictEqual(obj.a, 1, 'property "a" has value 1');
    });

    // Error Assertions
    it('should check errors', function() {
        assert.throws(() => { throw new Error('error'); }, /error/, 'function throws an error with message "error"');
        assert.doesNotThrow(() => { return 1 + 1; }, 'function does not throw an error');
    });

    // Satisfaction Assertions
    it('should check satisfaction', function() {
        assert.ok(5 > 2, '5 is above 2');
        assert.ok(2 < 5, '2 is below 5');
        assert.ok(5 >= 5, '5 is at least 5');
        assert.ok(5 <= 5, '5 is at most 5');
    });

    // Miscellaneous Assertions
    it('should check miscellaneous', function() {
        assert.strictEqual(null, null, 'null is null');
        assert.notStrictEqual(1, null, '1 is not null');
        assert.strictEqual(undefined, undefined, 'undefined is undefined');
        assert.notStrictEqual(1, undefined, '1 is defined');
        assert.strictEqual(typeof function() {}, 'function', 'function is a function');
        assert.strictEqual(typeof {}, 'object', '{} is an object');
        assert.ok(Array.isArray([]), '[] is an array');
        assert.strictEqual(typeof 'hello', 'string', '"hello" is a string');
        assert.strictEqual(typeof 123, 'number', '123 is a number');
    });
});
