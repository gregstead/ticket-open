const { model, Schema } = require("mongoose");
const validator = require("validator");

const patronSchema = new Schema({
  patronTitle: String,
  patronFirstName: String,
  patronMiddleName: String,
  patronLastName: String,
  patronSalutation: String,
  patronAddressStreet: String,
  patronAddressStreet2: String,
  patronAddressCity: String,
  patronAddressZipCode: String,
  patronAddressCountry: String,
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
  patronStatus: String,
  patronWebsite: String,
  patronFacebook: String,
  patronTwitter: String,
  patronLinkedIn: String,
  patronBackgroundInfo: String,
  businessTitle: String,
  businessCompany: String,
  businessIndustry: String,
  businessAddressStreet: String,
  businessAddressStreet2: String,
  businessAddressCity: String,
  businessAddressZipCode: String,
  businessAddressCountry: String,
  notes: String,
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
