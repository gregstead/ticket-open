const db = require("../models");

const role = {
  findAllRoles: function(_req, res) {
    db.role.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findRoleById: function(req, res) {
    db.role.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewRole: function(req, res) {
    db.role.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateRole: async function(req, res) {
    db.role.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteRole: async function(req, res) {
    const { id } = req.body;
    db.role.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = role;
