const db = require("../models");

const business = {
  findAllBusinesses: function(_req, res) {
    db.business.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findBusinessById: function(req, res) {
    db.business.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewBusiness: function(req, res) {
    db.business.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateBusiness: async function(req, res) {
    db.business.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteBusiness: async function(req, res) {
    const { id } = req.body;
    db.business.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = business;
