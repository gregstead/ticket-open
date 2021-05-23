const express = require("express");
const router = express.Router();

const patronRoutes = require("./patron");

// Patron routes
router.use("/patron", patronRoutes);

module.exports = router;
