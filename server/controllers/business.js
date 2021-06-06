const db = require("../models");

const business = {
  findAllAddresses: function(_req, res) {
    db.Business.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findAddressById: function(req, res) {
    db.Business.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewAddress: function(req, res) {
    db.Business.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateAddress: async function(req, res) {
    db.Business.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteAddress: async function(req, res) {
    const { id } = req.body;
    db.Business.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = business;
