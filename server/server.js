const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Item = require('./inventory');

mongoose.connect('mongodb://localhost/fs-inventory');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/inventory', (req, res) => {
  Item.find({}, (err, item) => {
    if (err) res.send(err);
    res.send(item);
  });
});

app.post('/new-item', (req, res) => {
  const newItem = new Item(req.body);
  newItem.save((err) => {
    if (err) res.send(err);
    res.send('User added!');
  });
});


