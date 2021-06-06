const router = require("express").Router();
const address = require("../controllers/address");

router.route("/").get(address.findAllAddresses);
// router.route("/:id").get(address.findUserById);
// router.route("/create").post(address.createNewUser);
// router.route("/update").put(address.updateUser);
// router.route("/delete").delete(address.deleteUser);

module.exports = router;
