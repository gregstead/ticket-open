// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Email is required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: [({ length }) => length >= 6, "Password should be longer"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
