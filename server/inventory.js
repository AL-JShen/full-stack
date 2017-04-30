const mongoose = require('mongoose');

const Inventory = new mongoose.Schema({
  name: 'string',
  stock: 0,
  price: 'string',
//  image: 'string',
});

module.exports = mongoose.model('inventory', Inventory);