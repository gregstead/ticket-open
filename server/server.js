// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

//Express app
const app = express();

//Express configurations
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow express app to serve static content from "client"
app.use(express.static("client"));

// add routes, API
app.use(routes);

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/ticketopen_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Listen
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
