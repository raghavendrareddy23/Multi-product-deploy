// models/db2Model.js
const mongoose = require('mongoose');

const db2Schema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = (db) => db.model('Db2Model', db2Schema);
