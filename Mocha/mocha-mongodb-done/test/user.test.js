const mongoose = require('mongoose');
const { MongoClient } = require('mongodb'); // Alternative for direct connection (optional)
const mocha = require('mocha');

const testRecord = { name: 'Test Record' }; // Sample data for record

describe('MongoDB Connection and Record Save', () => {
  let client; // Variable to hold the MongoDB client connection

  before(async () => {
    // Connect to MongoDB using Mongoose or direct connection (uncomment desired approach)
    client = await mongoose.connect('mongodb://localhost:27107/testDB2');

    // Alternative approach using MongoClient (optional)
     //client = await MongoClient.connect('mongodb://localhost:27107/testDB');
  });

  after(async () => {
    await client.close(); // Disconnect from MongoDB
  });

  it('should connect to MongoDB and save a record', (done) => {
    const db = client.db(); // Get the database instance

    db.collection('myCollection').insertOne(testRecord, (err, result) => {
      if (err) {
        done(err); // Report error and signal test failure with done
      } else {
        console.log('Record inserted:', result.insertedId);
        done(); // Signal test completion with done
      }
    });
  });
});
