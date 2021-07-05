const db = require("../models");

const user = {
  findAllUsers: function(_req, res) {
    
    db.user.findAll({
      attributes: ["id", "email", "first_name", "last_name"],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.status(500).json(err));
  },
  findUserById: function(req, res) {
    db.user.findById(req.params.id, {
      attributes: ["id", "email", "first_name", "last_name", "role"],
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  createNewUser: async function(req, res) {
    const { email, password, first_name, last_name, role } = req.body;
    db.user.create({
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      role: role,
    })
      .then((result) => {
        // console.log(result);
        const { id, email, first_name, last_name, role } = result; // eslint-disable-line
        const sendBack = { id, email, first_name, last_name, role };
        res.json(sendBack);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateUser: async function(req, res) {
    const { id, email, password, fName, lName, role } = req.body;
    db.user.update(
      {
        email: email,
        password: password,
        first_name: fName,
        last_name: lName,
        role: role,
      },
      {
        where: {
          id: id,
        },
      }
    )
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser: async function(req, res) {
    const { id } = req.body;
    db.user.destroy({
      where: {
        id: id,
      },
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = user;
