const assert = require('assert');

// Global fixture (simulated, doesn't modify actual state)
function mochaGlobalSetup() {
    global.globalData = { count: 0 }; 
  } 

  mochaGlobalSetup();
beforeEach(() => {
    global.globalData.count = 0; // Reset count before each test
});

it('test 1 - should start with count 0', () => {
  assert.equal(global.globalData.count, 0);
  global.globalData.count++; // Increment count in test 1
});

it('test 2 - should not reflect the incremented count', () => {
  assert.equal(global.globalData.count, 0); // Still 0 even though incremented in test 1
});
