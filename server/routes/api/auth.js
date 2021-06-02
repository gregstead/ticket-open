const router = require("express").Router();
const passport = require("../../config/passport");
const authController = require("../../controllers/auth");

router.use(passport.authenticate("local"));

router.route("/login").post(authController.login);

router.get("logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
