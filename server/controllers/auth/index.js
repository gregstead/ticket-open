const db = require("../../models");

const login = async (req, res) => {
  await db.user
    .findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.json({
          id: result.id,
          email: result.email,
          first_name: result.first_name,
          last_name: result.last_name,
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = login;
