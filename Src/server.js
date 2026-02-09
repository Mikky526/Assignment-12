const express = require('express');
const connectDB = require('./config/db');
const { logger, notFound } = require('./middleware/logger');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
connectDB(); // Connect to Mongo

app.use(express.json());
app.use(logger); // Logging middleware

// Use Routes
app.use('/', itemRoutes);

// 404 Error handling
app.use(notFound);

app.listen(3000, () => console.log('Server running on port 3000'));