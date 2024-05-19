
const doesTableExist = require("../utils");
const { sequelize } = require("../helper");

doesTableExist("countries")
  .then((exists) => {
    if (exists) {
      console.log("Table exists.");
    } else {
      console.log("Table does not exist.");
    }
  })
  .catch((error) => {
    console.error("Error checking table existence:", error);
});

sequelize.sync({ alter: true }).then(() => {
  console.log("Table migrate");
});
