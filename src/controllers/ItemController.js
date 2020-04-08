const Item = require('../models/Item');

module.exports = {
  async Create(req, res) {
    // try {
    //   const item = new Item(req.body);
    //   await item.save();
    //   } catch (error) {
    //   res.status(400).send(error);
    // }

    const item = new Item(req.body);
    item.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });

  },
};
