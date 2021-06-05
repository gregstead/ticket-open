// Dependencies
require("dotenv").config();
const express = require("express");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const SYNC_OPTIONS = {
  force: process.env.NODE_ENV === "test",
};

const db = require("./models");

//Express app
const app = express();

//Express configurations
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow express app to serve static content from "client"
app.use(express.static("client"));

// add routes, API
app.use(routes);

// Connect to mysql db

// Listen
db.sequelize.sync(SYNC_OPTIONS).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
  });
});
