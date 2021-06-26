const db = require("../models");

const patron = {
  findAllPatrons: function(_req, res) {
    db.patron.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findPatronById: function(req, res) {
    db.patron.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewPatron: function(req, res) {
    db.patron.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updatePatron: async function(req, res) {
    db.patron.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deletePatron: async function(req, res) {
    const { id } = req.body;
    db.patron.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = patron;
