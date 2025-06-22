var router = require('express').Router();
var CartSchema = require('../models/CartSchema');

// adding a product to the cart
router.post('/add-to-cart', async (req, res) => {
    try {
        var newcart = new CartSchema({
            userId: req.body.Id,
            productImage: req.body.product.productImage,
            productName: req.body.product.productName,
            productCompany: req.body.product.productCompany,
            productPrice: req.body.product.productPrice
        })
        await newcart.save();
        res.status(200).json({ message: "Product added to cart successfully" });
    } catch (error) {   
        console.log("Error from adding to cart", error);
        res.status(500).json({ message: "Error adding to cart" });
    }
    
})

module.exports = router;