// mongodb.js
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'testDB';

let client = null;

export async function connectToMongoDB() {
    try {
        client = await MongoClient.connect(url);
        console.log('Connected successfully to MongoDB server');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; // Throw error to handle in your test setup
    }
}

export function getMongoDBClient() {
    if (!client) {
        throw new Error('MongoDB client not initialized. Call connectToMongoDB() first.');
    }
    return client.db(dbName);
}
