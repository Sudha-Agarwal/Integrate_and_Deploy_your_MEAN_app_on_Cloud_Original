const assert = require('assert');
const User = require('../models/user');
const { closeDB } = require('./db');
const mongoose = require('mongoose');

const testData = {
    name: 'Test User',
    email: 'testuser@example.com',
    age: 20
};

/*after(async () => {
    await closeDB();
});*/
// Drop the User collection after each test
before((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});
describe('User CRUD Operations', () => {

    it('should create a new user', async () => {
        const user = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });
        const savedUser = await user.save();
        assert.strictEqual(savedUser.name, 'John Doe');
    });

    // Test for reading a user
    it('should read a user', async () => {
        //const user = new User({ name: 'Jane Doe', email: 'jane@example.com', age: 25 });
        //const savedUser = await user.save();
        const foundUser = await User.findOne({ name: 'John Doe'});
        assert.strictEqual(foundUser.name, 'John Doe');
        //assert.strictEqual(foundUser.email, 'jane@example.com');
        //assert.strictEqual(foundUser.age, 25);
    });

    // Test for updating a user
    it('should update a user', async () => {
        const user = new User({ name: 'John Smith', email: 'johnsmith@example.com', age: 40 });
        const savedUser = await user.save();
        const updatedUser = await User.findByIdAndUpdate(
            savedUser._id,
            { name: 'John Smith Updated' },
            { new: true }
        );
        assert.strictEqual(updatedUser.name, 'John Smith Updated');
    });

    // Test for deleting a user
    it('should delete a user', async () => {
        const user = new User({ name: 'Delete Me', email: 'deleteme@example.com', age: 50 });
        const savedUser = await user.save();
        await User.findByIdAndDelete(savedUser._id);
        const foundUser = await User.findById(savedUser._id);
        assert.strictEqual(foundUser, null);
    });

});
