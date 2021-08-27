const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedArticle = require("./articleData");
const seedComment = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- USER TABLE SEEDED -----\n");
  await seedArticle();
  console.log("\n----- ARTICLE TABLE SEEDED -----\n");
  await seedComment();
  console.log("\n----- COMMENT TABLE SEEDED -----\n");
  process.exit(0);
};

seedAll();
