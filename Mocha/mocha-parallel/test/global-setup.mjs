import mongoose from 'mongoose';

export async function mochaGlobalSetup() {
  console.log('Global Setup: Connecting to the database');
  await mongoose.connect('mongodb://localhost/test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function mochaGlobalTeardown() {
  console.log('Global Teardown: Disconnecting from the database');
  await mongoose.disconnect();
}
