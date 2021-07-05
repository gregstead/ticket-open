const router = require("express").Router();
const patron = require("../controllers/patron");

router.route("/").get(patron.findAllPatrons);
router.route("/:id").get(patron.findPatronById);
router.route("/create").post(patron.createNewPatron);
router.route("/update").put(patron.updatePatron);
router.route("/delete").delete(patron.deletePatron);

module.exports = router;
