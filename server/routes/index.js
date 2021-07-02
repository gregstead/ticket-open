const router = require("express").Router();

// const businessRoutes = require("./business");
// const noteRoutes = require("./note");
const patronRoutes = require("./patron");
const userRoutes = require("./user");
const addressRoutes = require("./address");
const apiRoutes = require("./api")

// Patron routes
// router.use("/business", businessRoutes);
// router.use("/note", noteRoutes);
router.use("/patron", patronRoutes);
router.use("/user", userRoutes);
router.use("/address", addressRoutes);
router.use("/api", apiRoutes)

module.exports = router;
