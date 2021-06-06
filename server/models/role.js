module.exports = function(sequelize, DataTypes) {
  const Role = sequelize.define("role", {
    title: {
      type: DataTypes.STRING,
    },
  });
  Role.associate = (models) => {
    Role.belongsTo(models.department);
  };
  return Role;
};
