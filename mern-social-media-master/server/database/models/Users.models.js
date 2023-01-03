const { sequelize, DataTypes } = require("sequelize");

// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

// const User = sequelize.define("users", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   Email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   Password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   Point: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   DOB: {
//     type: DataTypes.DATEONLY,
//     allowNull: true,
//   },
//   Gender: {
//     type: DataTypes.STRING,
//   },
//   Avata: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   Level: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   referralCode: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   Status: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   {
//     freezeTableName: true,
//   },
// });

// module.exports = User;

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: {
        args: true,
        msg: "Email address already in use",
      },
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Point: {
      type: DataTypes.INTEGER,
      defaultValue: 400,
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Avata: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    referralCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
