var  router = require('express').Router();
var multer = require ('multer')
var path = require ('path');
const VerifyToken = require('../Verfication/tokenVerification');
const { log } = require('console');
var productSchema = require('../models/ProductSchema');
const ProductSchema = require('../models/ProductSchema');

//multer
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        const uploadPath = path.resolve(__dirname, '../../Frontend/public/images')
        cb(null, uploadPath)
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

//add product
router.post('/addproduct', VerifyToken, upload.single('productImage'), async (req, res) => {
    console.log("Add Product Request Received", req.body);
    try {
        var newProduct = new ProductSchema({
            productImage: req.file.filename,
            productName: req.body.productName,
            productCompany: req.body.productCompany,
            productDescription: req.body.productDescription,
            productPrice: req.body.productPrice
        })
        await newProduct.save()
        res.status(200).json({message:'new product added'})

    } catch (error) {
        console.log("error from new product saving", error);
        
        res.status(500).json(error)
    }
})

module.exports = router;