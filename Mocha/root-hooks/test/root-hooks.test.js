const assert = require('assert');
//const User = require('../models/user');

// Root hooks (global to entire test suite)
before(() => {
    // This runs once before any tests in the entire suite
    console.log('Global setup: Connecting to database...');
    // Connect to database or perform other global setup tasks
    global.globalData = { count: 0 }; 
});

after(() => {
    // This runs once after all tests in the entire suite
    console.log('Global teardown: Disconnecting from database...');
    // Disconnect from database or perform other global teardown tasks
});

beforeEach(() => {
    // This runs before each individual test case in the entire suite
    console.log('Setting up for test...');
    // Additional setup tasks before each test case
});

afterEach(() => {
    // This runs after each individual test case in the entire suite
    console.log('Cleaning up after test...');
    // Additional cleanup tasks after each test case
});

// Test suite
describe('User CRUD Operations', () => {
    // Plain hooks (local to this describe block)
    before(() => {
        // This runs once before any tests in this describe block
        console.log('Local setup: Creating test data...');
        // Setup tasks specific to this describe block
    });

    after(() => {
        // This runs once after all tests in this describe block
        console.log('Local teardown: Cleaning up test data...');
        // Teardown tasks specific to this describe block
    });

    beforeEach(() => {
        // This runs before each test case in this describe block
        console.log('Setting up for a specific test case...');
        // Additional setup tasks specific to each test case
    });

    afterEach(() => {
        // This runs after each test case in this describe block
        console.log('Cleaning up after a specific test case...');
        // Additional cleanup tasks specific to each test case
    });
//shared data
    it('test 1 - should start with count 0', () => {
        assert.equal(global.globalData.count, 0);
        global.globalData.count++; // Increment count in test 1
      });
      
      it('test 2 - should reflect the incremented count', () => {
        assert.equal(global.globalData.count, 1); // value would be 1
      });

    // Actual test cases
    /*it('should create a new user', async () => {
        const user = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });
        const savedUser = await user.save();
        assert.strictEqual(savedUser.name, 'John Doe');
    });

    it('should read a user', async () => {
        const foundUser = await User.findOne({ name: 'John Doe' });
        assert.strictEqual(foundUser.name, 'John Doe');
        assert.strictEqual(foundUser.email, 'john@example.com');
        assert.strictEqual(foundUser.age, 30);
    });

    it('should update a user', async () => {
        const user = await User.findOne({ name: 'John Doe' });
        user.age = 31;
        const updatedUser = await user.save();
        assert.strictEqual(updatedUser.age, 31);
    });

    it('should delete a user', async () => {
        const user = await User.findOne({ name: 'John Doe' });
        await User.findByIdAndDelete(user._id);
        const deletedUser = await User.findById(user._id);
        assert.strictEqual(deletedUser, null);
    });*/
});
