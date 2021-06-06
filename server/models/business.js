module.exports = function(sequelize, DataTypes) {
  const Business = sequelize.define("business", {
    name: {
      type: DataTypes.STRING,
    },
  });
  // Associate business with Address
  // Associate business with Patron
  return Business;
};
