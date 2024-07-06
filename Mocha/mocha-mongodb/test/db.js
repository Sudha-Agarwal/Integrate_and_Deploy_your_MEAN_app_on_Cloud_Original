// db.js
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Use Node.js promises

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/testDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};

const closeDB = async () => {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error disconnecting from MongoDB: ', error);
    }
};

module.exports = {
    connectDB,
    closeDB,
};
