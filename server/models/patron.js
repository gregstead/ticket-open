module.exports = function(sequelize, DataTypes) {
  const Patron = sequelize.define("patron", {
    title: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    full_name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.getDataValue("first_name")} ${this.getDataValue(
          "last_name"
        )}`;
      },
    },
    phone: {
      type: DataTypes.STRING,
    },
    phone2: {
      type: DataTypes.STRING,
    },
    phone3: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    website: {
      type: DataTypes.STRING,
    },
    linkedIn: {
      type: DataTypes.STRING,
    },
    twitter: {
      type: DataTypes.STRING,
    },
    facebook: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
  });

  Patron.associate = (models) => {
    Patron.hasOne(models.user, {
      as: "representative",
    });
    Patron.belongsToMany(models.address, {
      as: "patrons",
      through: "patron_address",
    });
    Patron.hasMany(models.business);
    Patron.hasMany(models.note);
  };

  return Patron;
};
