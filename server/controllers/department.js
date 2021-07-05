const db = require("../models");

const department = {
  findAllDepartments: function(_req, res) {
    db.department.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  findDepartmentById: function(req, res) {
    db.department.findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewDepartment: function(req, res) {
    db.department.create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateDepartment: async function(req, res) {
    db.department.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteDepartment: async function(req, res) {
    const { id } = req.body;
    db.department.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = department;
