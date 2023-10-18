/*
  Description: file responsible for 'product' model handling
  Author: Victor Godwin
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Category
*
* Name: String
* */
var CategorySchema = new Schema({
    name: String
});
module.exports = mongoose.model('category', CategorySchema);

