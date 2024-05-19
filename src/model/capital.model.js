const { Sequelize, DataTypes } = require("sequelize");
const doesTableExist = require("../utils");

// Create a new Sequelize instance
const { sequelize } = require("../helper");

const Capital = sequelize.define(
  "capital",
  {
    capitalName: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

// sequelize.sync({alter: true}).then(() => {
//     console.log('Capital updated table');
// });

module.exports = Capital;
