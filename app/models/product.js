/*
  Description: file responsible for 'product' model handling
  Author: Victor Godwin
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
* Product
*
* Id: int
* Name: String
* Amount: int
* Description: String,
* price: Number,
*quantity: Number,
*category: String
* */
var ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
});
/* Category
*
* Name: String
* */
var CategorySchema = new Schema({
    name: String
});
module.exports = mongoose.model('product', ProductSchema);

