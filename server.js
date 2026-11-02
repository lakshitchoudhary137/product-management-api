
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.routes');

const app = express();

// Middleware to read JSON request bodies
app.use(express.json());

// Product API routes
app.use('/api/products', productRoutes);

// Start server only after MongoDB connects
const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup failed because MongoDB is unavailable.');
        process.exit(1);
    }
};

startServer();
