const { model, Schema } = require("mongoose");
const validator = require("validator").isEmail;

const Patron = new Schema({
  // Patron common name
  fistName: String,
  lastName: String,
  email: {
    type: String,
    validate: validator,
    message: "That is not a valid email",
    isAsync: false,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Patron", Patron);
