const { model, Schema } = require("mongoose");
const validator = require("validator").isEmail;

const Patron = new Schema({
  name: {
    title: String,
    firstName: String,
    lastName: String,
    salutation: String,
  },
  email: {
    type: String,
    unique: true,
    validate: validator,
    message: "That is not a valid email",
    isAsync: false,
    required: true,
  },
  address: {
    street: String,
    street2: String,
    city: String,
    zipCode: String,
    country: String,
  },
  notes: String,

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Patron", Patron);
