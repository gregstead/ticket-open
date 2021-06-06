const db = require("../models");

const address = {
  findAllAddresses: function(_req, res) {
    db.Address.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = address;
