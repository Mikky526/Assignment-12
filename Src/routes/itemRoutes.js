const express = require('express');
const router = express.Router();
const { createItem, getItems } = require('../Controller/itemController');

router.get('/', (req, res) => res.send("Inventory API is Running"));
router.get('/health', (req, res) => res.json({ status: "OK" }));

router.post('/items', createItem);
router.get('/items', getItems);

module.exports = router;