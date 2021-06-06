module.exports = function(sequelize, DataTypes) {
  const Address = sequelize.define("Address", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
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

  return Address;
};
