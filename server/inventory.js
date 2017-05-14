const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  itemName: 'string',
  itemStock: 'string', 
  itemPrice: 'string'
});

module.exports = mongoose.model('Item', ItemSchema);