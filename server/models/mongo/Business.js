const { model, Schema } = require("mongoose");

const businessSchema = new Schema({
  name: String,
  industry: String,
  addressStreet: String,
  addressStreet2: String,
  addressCity: String,
  addressZipCode: String,
  addressCountry: String,
});

module.exports = model("Business", businessSchema);
