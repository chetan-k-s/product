const express = require('express');
const router = express.Router();
const {addProduct, deleteProducts, displayProducts, searchProduct,updateProducts} = require('../controllers/productControllers')

router.post('/add', addProduct)
router.get('/display', displayProducts)
router.delete('/:id', deleteProducts)
router.get('/:id', searchProduct)
router.put('/:id', updateProducts)

module.exports = router;