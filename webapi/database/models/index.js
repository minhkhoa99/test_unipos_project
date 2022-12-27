const dbConfig = require("./db");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.models = {};
db.models.Users = require("./Users.models")(sequelize, Sequelize.DataTypes);
db.models.Blogs = require("./Blogs.models")(sequelize, Sequelize.DataTypes);
db.models.Comment = require("./Comment.models")(sequelize, Sequelize.DataTypes);
db.models.History = require("./History.models")(sequelize, Sequelize.DataTypes);
db.models.Report = require("./Report.models")(sequelize, Sequelize.DataTypes);

/** User */
db.models.Users.hasMany(db.models.Blogs);
db.models.Users.hasMany(db.models.History);
db.models.Users.hasMany(db.models.Comment);
db.models.Users.hasMany(db.models.Report);

/** Blog */
db.models.Blogs.hasMany(db.models.Comment);

db.models.Blogs.belongsTo(db.models.Users);

/** History */
db.models.History.belongsTo(db.models.Users);
db.models.History.belongsTo(db.models.Users);

/** Comment */
db.models.Comment.belongsTo(db.models.Users);

/** Report */
db.models.Report.belongsTo(db.models.Users);

module.exports = db;