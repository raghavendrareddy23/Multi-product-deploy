// routes/db1Routes.js
const express = require('express');
const router = express.Router();
const db1Controller = require('../Controllers/db1Controller');

router.get('/items', db1Controller.getAllItems);
router.post('/items', db1Controller.createItem);

module.exports = router;
