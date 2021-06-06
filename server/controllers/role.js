const db = require("../models");

const role = {
  findAllRoles: function(_req, res) {
    db.Role.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findRoleById: function(req, res) {
    db.Role.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewRole: function(req, res) {
    db.Role.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateRole: async function(req, res) {
    db.Role.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteRole: async function(req, res) {
    const { id } = req.body;
    db.Role.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = role;
