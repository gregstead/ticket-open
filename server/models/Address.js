const { model, Schema } = require("mongoose");

const addressSchema = new Schema({
  streetNumber: String,
  buildingName: String,
  streetNumberSuffix: String,
  streetName: String,
  streetType: String,
  streetDirection: String,
  type: String,
  typeIdentifier: String,
  localMunicipality: String,
  city: String,
  governingDistrict: String,
  postalArea: String,
  country: String,
});

module.exports = model("Address", addressSchema);
