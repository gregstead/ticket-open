module.exports = function(sequelize, DataTypes) {
  const Business = sequelize.define("business", {
    name: {
      type: DataTypes.STRING,
    },
  });
  // Associate business with Address
  Business.associate = (models) => {
    Business.belongsToMany(models.address, {
      as: "businesses",
      through: "business_address",
    });
    Business.belongsTo(models.patron);
  };
  // Associate business with Patron
  return Business;
};
