import mongoose from 'mongoose';

before(async function() {
  console.log('Global Setup');
  await mongoose.connect('mongodb://localhost/test_db');
});

after(async function() {
  console.log('Global Teardown');
  await mongoose.disconnect();
});
