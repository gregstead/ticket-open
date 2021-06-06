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
  // Associate with users
  Address.associate = (models) => {
    Address.belongsToMany(models.user, {
      through: "user_address",
    });
  };

  return Address;
};
