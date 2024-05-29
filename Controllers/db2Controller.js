// controllers/db2Controller.js
const createModel = require('../Models/db2Model');

const getAllItems = async (req, res) => {
  const Db2Model = createModel(req.db2);
  const items = await Db2Model.find();
  res.json(items);
};

const createItem = async (req, res) => {
  const Db2Model = createModel(req.db2);
  const newItem = new Db2Model(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

module.exports = {
  getAllItems,
  createItem
};
