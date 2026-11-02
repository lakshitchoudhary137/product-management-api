
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Temporary storage (used if MongoDB is unavailable)
let products = [];
let nextId = 1;

// Mongoose Product Model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

// Check database connection
const isDatabaseConnected = () => {
    return mongoose.connection.readyState === 1;
};

// GET - Display all products
app.get('/api/products', async (req, res) => {
    try {
        if (isDatabaseConnected()) {
            const allProducts = await Product.find();
            return res.json(allProducts);
        }

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Add a new product
app.post('/api/products', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;

        if (!name || price === undefined || quantity === undefined) {
            return res.status(400).json({
                message: "Name, price and quantity are required"
            });
        }

        let newProduct;

        if (isDatabaseConnected()) {
            newProduct = await Product.create({
                name,
                price,
                quantity
            });
        } else {
            newProduct = {
                id: nextId++,
                name,
                price,
                quantity
            };

            products.push(newProduct);
        }

        res.status(201).json({
            message: "Product added successfully",
            product: newProduct
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT - Update a product
app.put('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let updatedProduct;

        if (isDatabaseConnected()) {
            if (!mongoose.isValidObjectId(id)) {
                return res.status(400).json({
                    message: "Invalid product ID"
                });
            }

            updatedProduct = await Product.findByIdAndUpdate(
                id,
                req.body,
                { new: true, runValidators: true }
            );
        } else {
            const product = products.find(p => p.id === Number(id));

            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            Object.assign(product, req.body);
            updatedProduct = product;
        }

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json({
            message: "Product updated successfully",
            product: updatedProduct
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE - Delete a product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let deletedProduct;

        if (isDatabaseConnected()) {
            if (!mongoose.isValidObjectId(id)) {
                return res.status(400).json({
                    message: "Invalid product ID"
                });
            }

            deletedProduct = await Product.findByIdAndDelete(id);
        } else {
            const index = products.findIndex(
                p => p.id === Number(id)
            );

            if (index === -1) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            deletedProduct = products.splice(index, 1)[0];
        }

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json({
            message: "Product deleted successfully",
            product: deletedProduct
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");

    if (process.env.MONGO_URI) {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("MongoDB connected successfully!");
            })
            .catch(error => {
                console.log("MongoDB unavailable. Using temporary storage.");
                console.log(error.message);
            });
    } else {
        console.log("MONGO_URI missing. Using temporary storage.");
    }
});
