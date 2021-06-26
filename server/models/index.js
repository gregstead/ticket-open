const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "../config/config.json"))[env];
const db = {};
let sequelize;

// if production environment
if (config.use_env_variable) {
  // sequelize instance with jawsdb url
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  // sequelize instance with local variables
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// get the contents of the current directory
fs.readdirSync(__dirname)
  // filter out non-js files
  .filter(
    (file) => file.includes(".") && file !== basename && file.endsWith(".js")
  )
  // add each model to the db object
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
