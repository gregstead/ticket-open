const { model, Schema } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
  // User Name
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  salutation: String,
  // User Address
  streetNumber: String,
  buildingName: String,
  streetNumberSuffix: String,
  streetName: String,
  streetType: String,
  streetDirection: String,
  addressType: String,
  addressTypeIdentifier: String,
  localMunicipality: String,
  city: String,
  governingDistrict: String,
  postalArea: String,
  country: String,
  // Patron Contact info
  phone: String,
  mobile: {
    type: String,
    validate: validator.isMobilePhone,
    message: "That is not a valid mobile phone number",
    isAsync: false,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    validate: validator.isEmail,
    message: "That is not a valid email",
    isAsync: false,
    required: true,
  },
  department: String,
  password: String,
  role: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Users", userSchema);
