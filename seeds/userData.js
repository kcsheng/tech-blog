const { User } = require("../models");

const userData = [
  {
    username: "johndoe",
    password: "password1",
  },
  {
    username: "marydoe",
    password: "password2",
  },
  {
    username: "fitz",
    password: "password3",
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
