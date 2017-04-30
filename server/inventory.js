const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  itemName: 'string',
  itemStock: 'number', 
  itemPrice: 'string'
});

module.exports = mongoose.model('Item', ItemSchema);