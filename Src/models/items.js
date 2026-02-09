const mongoose = require('mongoose');

// Define the Schema for an Item
const itemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    }
});

// Create and export the model
module.exports = mongoose.model('Item', itemSchema);