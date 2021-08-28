const { User } = require("../../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.err(err);
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userPostedData = await User.create({
      username,
      password,
    });
    res.status(200).json(userPostedData);
    res.redirect("/");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
