const Product = require('../models/Product')

exports.addProduct = async (req, res) => {
    try {
        const product = Product(req.body);
        await product.save();
        return res.status(201).json({
            message: "product added successfully"
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.searchProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            productId: req.params.id
        })
        if (!product) {
            return res.status(400).json({
                message: "Couldn't find the product"
            })
        }
        return res.status(200).json(product)
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.displayProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(400).json({
                message: "No products available"
            })
        }
        return res.status(200).json(products)
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.deleteProducts = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({
            productId: req.params.id
        })

        if (!product) {
            return res.status(400).json({
                message: "Couldn't find the product to delete"
            })
        }
        return res.status(200).json(product)
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

exports.updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const product = await Product.findOneAndUpdate(
            { productId: id },      
            updateData,             
            { new: true, runValidators: false}
        );

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            product
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        });
    }
};
