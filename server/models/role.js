module.exports = function(sequelize, DataTypes) {
  const Role = sequelize.define("role", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
  });
  Role.associate = (models) => {
    Role.hasOne(models.department);
    Role.hasMany(models.user, {
      onDelete: "NO ACTION",
    });
  };
  return Role;
};
