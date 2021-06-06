module.exports = function(sequelize, DataTypes) {
  const Department = sequelize.define("Department", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  });
  //Associate Department with Role
  Department.associate = (models) => {
    Department.hasMany(models.role, {
      sourceKey: "id",
    });
  };
  return Department;
};
