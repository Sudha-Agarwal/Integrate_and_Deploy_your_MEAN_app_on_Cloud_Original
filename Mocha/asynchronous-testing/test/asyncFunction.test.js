const assert = require('assert');
const fetchData = require('../src/asyncFunction'); // Adjust the path as necessary

// Test Suite for Asynchronous Operations
describe('Asynchronous Operations', function() {
    //this.timeout(5000); // Increase timeout for the tests

    // Test for fetching data
    it('should fetch user data', function(done) {
        fetchData((err, data) => {
            if (err) {
                return done(err);
            }
            try {
                assert.strictEqual(data.name, 'John Doe');
                assert.strictEqual(data.email, 'john@example.com');
                assert.strictEqual(data.age, 30);
                done();
            } catch (assertionError) {
                done(assertionError);
            }
        });
    });
});
