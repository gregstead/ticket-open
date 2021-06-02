const login = async (req, res) => {
  console.log("auth controller hit");
  res.json({ id: req.user.id });
};

exports.login = login;
