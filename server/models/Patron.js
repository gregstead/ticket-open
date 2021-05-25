const { model, Schema } = require("mongoose");
const validator = require("validator");

const patronSchema = new Schema({
  // Patron Name
  patronTitle: String,
  patronFirstName: String,
  patronMiddleName: String,
  patronLastName: String,
  patronSalutation: String,
  // Patron Address
  patronAddressStreetNumber: String,
  patronAddressBuildingName: String,
  patronAddressStreetNumberSuffix: String,
  patronAddressStreetName: String,
  patronAddressStreetType: String,
  patronAddressStreetDirection: String,
  patronAddressAddressType: String,
  patronAddressAddressTypeIdentifier: String,
  patronAddressLocalMunicipality: String,
  patronAddressCity: String,
  patronAddressGoverningDistrict: String,
  patronAddressPostalArea: String,
  patronAddressCountry: String,
  // Patron Contact info
  patronPhone: String,
  patronMobile: {
    type: String,
    validate: validator.isMobilePhone,
    message: "That is not a valid mobile phone number",
    isAsync: false,
    required: false,
  },
  patronEmail: {
    type: String,
    unique: true,
    validate: validator.isEmail,
    message: "That is not a valid email",
    isAsync: false,
    required: true,
  },
  patronWebsite: String,
  patronFacebook: String,
  patronTwitter: String,
  patronLinkedIn: String,
  // Patron Details
  patronStatus: String,
  patronBackgroundInfo: String,
  businessTitle: String,
  businessCompany: String,
  businessIndustry: String,
  businessAddressStreet: String,
  businessAddressStreet2: String,
  businessAddressCity: String,
  businessAddressZipCode: String,
  businessAddressCountry: String,
  notes: {
    type: Schema.Types.ObjectId,
    ref: "PatronNotes",
  },
  patronRepresentative: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Patron", patronSchema);
