const router = require("express").Router();
const { User, Article, Comment } = require("../models");

router.get("/", async (req, res) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

module.exports = router;
