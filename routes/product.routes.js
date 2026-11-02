
const express = require('express');
const router = express.Router();

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller');

// GET all products
router.get('/', getProducts);

// GET one product by ID
router.get('/:id', getProduct);

// CREATE a product
router.post('/', createProduct);

// UPDATE a product
router.put('/:id', updateProduct);

// DELETE a product
router.delete('/:id', deleteProduct);

module.exports = router;
