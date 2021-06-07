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
    is_manager: {
      type: DataTypes.BOOLEAN,
      required: true,
    },
  });
  User.associate = (models) => {
    User.belongsTo(models.role);
    User.belongsToMany(models.address, {
      as: "users",
      through: "user_address",
    });
    // Associate user with manager
    User.belongsTo(User, {
      as: "manager",
      through: "manager",
    });
    // associate with patron
    User.belongsTo(models.patron, {
      as: "representative",
    });
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
