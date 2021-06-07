module.exports = function(sequelize, DataTypes) {
  const Address = sequelize.define("address", {
    line1: {
      type: DataTypes.STRING,
    },
    line2: {
      type: DataTypes.STRING,
    },
    line3: {
      type: DataTypes.STRING,
    },
    line4: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    postcode: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  });

  Address.associate = (models) => {
    Address.belongsToMany(models.user, {
      as: "user_addresses",
      through: "user_address",
    });
    Address.belongsToMany(models.business, {
      as: "business_addresses",
      through: "business_address",
    });
    Address.belongsToMany(models.patron, {
      as: "patron_addresses",
      through: "patron_address",
    });
  };

  return Address;
};
