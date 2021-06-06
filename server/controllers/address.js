const db = require("../models");

const address = {
  findAllAddresses: function(_req, res) {
    db.Address.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findAddressById: function(req, res) {
    db.Address.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewAddress: function(req, res) {
    db.Address.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateUser: async function(req, res) {
    db.User.update(req.body, {
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = address;
