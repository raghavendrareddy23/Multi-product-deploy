// models/db1Model.js
const mongoose = require('mongoose');

const db1Schema = new mongoose.Schema({
  name: String,
  value: Number
});

module.exports = (db) => db.model('Db1Model', db1Schema);
