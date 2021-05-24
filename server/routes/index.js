const express = require("express");
const router = express.Router();

const patronRoutes = require("./patron");
const userRoutes = require("./user");

// Patron routes
router.use("/patron", patronRoutes);
router.use("/user", userRoutes);

module.exports = router;
