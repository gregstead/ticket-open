const router = require("express").Router();
const business = require("../controllers/business");

router.route("/").get(business.findAllUsers);
router.route("/:id").get(business.findUserById);
router.route("/create").post(business.createNewUser);
router.route("/update").put(business.updateUser);
router.route("/delete").delete(business.deleteUser);

module.exports = router;
