const { Sequelize, DataTypes } = require("sequelize");
const doesTableExist = require("../utils");
const Capital = require("./capital.model");

// Create a new Sequelize instance
const { sequelize } = require("../helper");

const Country = sequelize.define(
    "country",
    {
      countryName: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  Country.hasOne(Capital);

// doesTableExist("countries")
//   .then((exists) => {
//     if (exists) {
//       console.log("Country Table exists.");
//     } else {
//       console.log("Country Table does not exist.");
//       Country.sync().then(() => {
//             console.log('Country table created');
//         });
//     }
//   })
//   .catch((error) => {
//     console.error("Error checking table existence:", error);
//   });

module.exports = Country;
