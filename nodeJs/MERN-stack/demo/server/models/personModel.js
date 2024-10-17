const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // name: String,
    age: Number,
    city: String,
  },
  { versionKey: false }
);

const Person = mongoose.model('person', personSchema, 'persons');

module.exports = Person;
