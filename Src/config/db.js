const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://slvineeth_db_user:hz2ajTQ7Quy5LgzJ@cluster0.xdofsgp.mongodb.net/items", );

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;