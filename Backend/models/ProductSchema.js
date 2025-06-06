var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    productimage: { type: String, required: true },
    productname: { type: String, required: true },
    productprice: { type: Number, required: true },
    productdescription: { type: String, required: true },
    productcompany: { type: String, required: true }
})

module.exports = mongoose.model('Product-data', ProductSchema);
