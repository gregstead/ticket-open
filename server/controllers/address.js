const db = require("../models");

const address = {
  findAllAddresses: function(_req, res) {
    db.address.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  }, 
  findAddressById: function(req, res) {
    db.address.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewAddress: function(req, res) {
    db.address.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateAddress: async function(req, res) {
    db.address.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteAddress: async function(req, res) {
    const { id } = req.body;
    db.address.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = address;
