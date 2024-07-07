// Example test1.test.mjs
import { assert } from 'https://unpkg.com/chai/chai.js';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
