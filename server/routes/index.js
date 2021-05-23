const express = require("express");
const router = express.Router();

const apiRoutes = require("./api");

//API routes
router.use("/api", apiRoutes);

module.exports = router;
