var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    productImage: { type: String, required: true },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDescription: { type: String, required: true },
    productCompany: { type: String, required: true }
})

module.exports = mongoose.model('Product-data', ProductSchema);
