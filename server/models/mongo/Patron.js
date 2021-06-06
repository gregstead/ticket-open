const { model, Schema } = require("mongoose");
const validator = require("validator");

const patronSchema = new Schema({
  // Patron Name
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  salutation: String,
  // Patron Address
  address: {
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
  },
  // Patron Contact info
  phone: String,
  // mobile: {
  //   type: String,
  //   validate: validator.isMobilePhone,
  //   message: "That is not a valid mobile phone number",
  //   isAsync: false,
  //   required: false,
  // },
  email: {
    type: String,
    unique: true,
    validate: validator.isEmail,
    message: "That is not a valid email",
    isAsync: false,
    required: true,
  },
  // Patron Details
  website: String,
  facebook: String,
  twitter: String,
  linkedIn: String,
  role: String,
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
  },
  notes: {
    type: Schema.Types.ObjectId,
    ref: "Note",
  },
  representative: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Patron", patronSchema);
