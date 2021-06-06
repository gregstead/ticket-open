const router = require("express").Router();
const role = require("../controllers/role");

router.route("/").get(role.findAllRole);
router.route("/:id").get(role.findRoleById);
router.route("/create").post(role.createNewUser);
router.route("/update").put(role.updateRole);
router.route("/delete").delete(role.deleteRole);

module.exports = router;
