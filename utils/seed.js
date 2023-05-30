const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { seedUsers, seedThoughts } = require('./data');

connection.on('error', (err) => err);
console.log('connected');

// Delete all data in the database
// then reseed
const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  await Thought.deleteMany({});
  await Thought.insertMany(seedThoughts);
};

seedDB().then (() => {
  connection.close();
  console.log("Done!");
});

