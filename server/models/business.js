module.exports = function(sequelize, DataTypes) {
  const Business = sequelize.define("Business", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  });
  // Associate business with Address
  // Associate business with Patron
  return Business;
};
