const assert = require('assert');

describe('Example Test Suite', function() {
    it('should run normally', function() {
        assert.strictEqual(1 + 1, 2);
    });

    it.skip('should be skipped', function() {
        // This test is skipped
        assert.strictEqual(1 + 1, 3); // Won't run
    });

    /*it.only('should run exclusively', function() {
        // Only this test will run
        assert.strictEqual(1 + 1, 2);
    });*/

    it('should retry on failure', function() {
        this.retries(3); // Retry up to 3 times on failure
        assert.strictEqual(Math.random() > 0.5, true); // Random test that might fail
    });
});
