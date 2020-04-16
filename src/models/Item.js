const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    trim: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    trim: true,
    default: Date.now
  },
});

const item = mongoose.model('item', itemSchema);

module.exports = item;
