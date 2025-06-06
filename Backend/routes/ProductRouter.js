var  router = require('express').Router();

//add product
router.post('/addproduct', async (req, res) => {
    console.log("Add Product Request Received", req.body);
    
})

module.exports = router;