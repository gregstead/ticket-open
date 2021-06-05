// const { model, Schema } = require("mongoose");
// const validator = require("validator");

// const userSchema = new Schema({
//   // User Name
//   title: String,
//   firstName: String,
//   middleName: String,
//   lastName: String,
//   salutation: String,
//   // User Address
//   address: {
//     streetNumber: String,
//     buildingName: String,
//     streetNumberSuffix: String,
//     streetName: String,
//     streetType: String,
//     streetDirection: String,
//     addressType: String,
//     addressTypeIdentifier: String,
//     localMunicipality: String,
//     city: String,
//     governingDistrict: String,
//     postalArea: String,
//     country: String,
//   },
//   phone: String,
//   email: {
//     type: String,
//     unique: true,
//     validate: validator.isEmail,
//     message: "That is not a valid email",
//     isAsync: false,
//     required: true,
//   },
//   role: String,
//   dateCreated: {
//     type: Date,
//     default: Date.now,
//   },
// });

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  });
};
