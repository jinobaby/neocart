var router = require('express').Router();
var CartSchema = require('../models/CartSchema');
const VerifyToken = require('../Verfication/tokenVerification');

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

// getting all products in the cart
router.get('/get-cart/:ID', VerifyToken, async (req, res) => {
    try {
        
        var CartData = await CartSchema.find({ userId: req.params.ID }).populate('userId');
        res.status(200).json(CartData);

    } catch (error) {
        
        console.log("Error from getting cart items", error);
        res.status(500).json({ message: "Error getting cart items" });
    
    }
})

// remove a product from the cart
router.delete('/remove-cart/:cartId', async (req, res) => {
    try {
        await CartSchema.findByIdAndDelete(req.params.cartId);
        res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
        console.log("Error from removing cart item", error);
        res.status(500).json({ message: "Error removing cart item" });
    }
});

module.exports = router;