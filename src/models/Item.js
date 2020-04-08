const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const item = mongoose.model('item', itemSchema);

module.exports = item;
