const { model, Schema } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  userTitle: String,
  userFirstName: String,
  userlastName: String,
  userMiddleName: String,
  userEmail: {
    type: String,
    unique: true,
    validate: validator.isEmail,
    message: "That is not a valid email",
    isAsync: false,
    required: true,
  },
  userPassword: String,
  userRole: String,
  userStatus: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Users", userSchema);
