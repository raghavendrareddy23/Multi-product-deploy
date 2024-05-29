// controllers/db1Controller.js
const createModel = require('../Models/db1Model');

const getAllItems = async (req, res) => {
  const Db1Model = createModel(req.db1);
  const items = await Db1Model.find();
  res.json(items);
};

const createItem = async (req, res) => {
  const Db1Model = createModel(req.db1);
  const newItem = new Db1Model(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

module.exports = {
  getAllItems,
  createItem
};
