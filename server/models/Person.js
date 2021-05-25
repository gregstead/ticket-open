const { model, Schema } = require("mongoose");
const validator = require("validator");

const personSchema = new Schema({
  //  Name
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  salutation: String,
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
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
  role: String,
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
  },
  website: String,
  facebook: String,
  twitter: String,
  linkedIn: String,
  //  Details
  status: String,
  backgroundInfo: String,

  notes: {
    type: Schema.Types.ObjectId,
    ref: "Notes",
  },
  Representative: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("", Schema);
