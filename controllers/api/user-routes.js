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

// Create a new user (sign in route)
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const dbUserData = await User.create({
      username,
      password,
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Log in existing user (log in route)
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    const isPasswordValid = req.body.password === dbUserData.password;

    if (!isPasswordValid) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    res
      .status(200)
      .json({ user: dbUserData, message: "You are now logged in" });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
