const Item = require('../models/Item');

module.exports = {
  async Create(req, res) {
    const item = new Item(req.body);
    item
      .save()
      .then((item) => {
        res.send('item saved to database');
      })
      .catch((err) => {
        res.status(400).send('unable to save to database');
      });
  },

  async Search(req, res) {
    Item.find()
      .then((item) => {
        res.send(item);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving items.',
        });
      });
  },

  async SearchOne(req, res) {
    Item.findById(req.body._id)
      .then((item) => {
        if (!item) {
          return res.status(404).send({
            message: 'item not found with id ' + req.body._id,
          });
        }
        res.send(item);
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'item not found with id ' + req.body._id,
          });
        }
        return res.status(500).send({
          message: 'Error retrieving item with id ' + req.body._id,
        });
      });
  },
};
