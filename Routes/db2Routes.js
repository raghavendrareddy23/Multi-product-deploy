// routes/db2Routes.js
const express = require('express');
const router = express.Router();
const db2Controller = require('../Controllers/db2Controller');

router.get('/items', db2Controller.getAllItems);
router.post('/items', db2Controller.createItem);

module.exports = router;
