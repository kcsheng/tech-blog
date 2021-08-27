const { User } = require("../models");

const userData = [
  {
    username: "John Doe",
    password: "password1",
  },
  {
    username: "Mary Doe",
    password: "password2",
  },
  {
    username: "Fitz Woden",
    password: "password3",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
