const db = require("../../models")

const login = async (req, res) => {
  const result = await db.User.findOne({where: { email: req.body.email}})
  if (result) {
    res.json({id: result.id})
  }
  console.log("auth controller hit");
  res.json({ id: req.user.id });
};

exports.login = login;
