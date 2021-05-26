const express = require("express");
const router = express.Router();

const businessRoutes = require("./business");
const noteRoutes = require("./note");
const patronRoutes = require("./patron");
const userRoutes = require("./user");

// Patron routes
router.use("/business", businessRoutes);
router.use("/note", noteRoutes);
router.use("/patron", patronRoutes);
router.use("/user", userRoutes);

module.exports = router;
