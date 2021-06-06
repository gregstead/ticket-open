const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    full_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.getDataValue("first_name")} ${this.getDataValue(
          "last_name"
        )}`;
      },
    },
  });
  User.associate = (models) => {
    // Associate user with role
    User.belongsTo(models.role, {
      onDelete: "NO ACTION",
    });
    // Associate user with address
  };
  //  This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Before a User is created, automatically hash their password
  User.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
