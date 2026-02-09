const mongoose = require('mongoose');
const Item = require('../models/items');

exports.createItem = async (req, res) => {
    try {
        console.log('DB host:', mongoose.connection.host);
        console.log('DB name:', mongoose.connection.name);
        console.log('Create payload:', req.body);
        const newItem = new Item(req.body);
        const saved = await newItem.save();
        console.log('Saved item:', saved);
        res.status(201).json(saved);
    } catch (err) {
        console.error('Create item error:', err);
        res.status(400).json({ error: err.message });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};