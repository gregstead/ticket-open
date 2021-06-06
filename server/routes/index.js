const router = require("express").Router();

// const businessRoutes = require("./business");
// const noteRoutes = require("./note");
// const patronRoutes = require("./patron");
// const personRoutes = require("./person");
const userRoutes = require("./user");
const addressRoutes = require("./address");

// Patron routes
// router.use("/business", businessRoutes);
// router.use("/note", noteRoutes);
// router.use("/patron", patronRoutes);
// router.use("/person", personRoutes);
router.use("/user", userRoutes);
router.use("/address", addressRoutes);

module.exports = router;
