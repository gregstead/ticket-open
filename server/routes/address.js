const router = require("express").Router();
const address = require("../controllers/address");

router.route("/").get(address.findAllAddresses);
router.route("/:id").get(address.findAddressById);
router.route("/create").post(address.createNewAddress);
router.route("/update").put(address.updateAddress);
router.route("/delete").delete(address.deleteAddress);

module.exports = router;
