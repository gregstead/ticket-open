const express = require("express");
const router = express.Router();

const addressRoutes = require("./address");
const businessRoutes = require("./business");
const noteRoutes = require("./note");
const patronRoutes = require("./patron");
const personRoutes = require("./person");
const userRoutes = require("./user");

// Patron routes
router.use("/address", addressRoutes);
router.use("/business", businessRoutes);
router.use("/note", noteRoutes);
router.use("/patron", patronRoutes);
router.use("/person", personRoutes);
router.use("/user", userRoutes);

module.exports = router;
