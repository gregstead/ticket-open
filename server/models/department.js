module.exports = function(sequelize, DataTypes) {
  const Department = sequelize.define("department", {
    name: {
      type: DataTypes.STRING,
    },
  });
  //Associate Department with Role
  Department.associate = (models) => {
    Department.hasMany(models.role, {
      as: "roles",
    });
  };
  return Department;
};
