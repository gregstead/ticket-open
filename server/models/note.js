module.exports = function(sequelize, DataTypes) {
  const Note = sequelize.define("note", {
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
    is_new_todo: {
      type: DataTypes.BOOLEAN,
    },
  });
  Note.associate = (models) => {
    Note.belongsTo(models.user, {
      as: "author",
    });
    Note.belongsTo(models.patron);
  };
  return Note;
};
