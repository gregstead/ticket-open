"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      address.belongsToMany(models.user, {
        as: "user_addresses",
        through: "user_address",
      });
      address.belongsToMany(models.business, {
        as: "business_addresses",
        through: "business_address",
      });
      address.belongsToMany(models.patron, {
        as: "patron_addresses",
        through: "patron_address",
      });
    }
  }
  address.init(
    {
      line1: DataTypes.STRING,
      line2: DataTypes.STRING,
      line3: DataTypes.STRING,
      line4: DataTypes.STRING,
      city: DataTypes.STRING,
      region: DataTypes.STRING,
      postcode: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};
