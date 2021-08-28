const router = require("express").Router();
const { User, Article, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allArticlesRaw = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const articles = allArticlesRaw.map((blog) => blog.get({ plain: true }));
    const loggedIn = req.session.loggedIn;
    // The follwoing code brings the log in state into views
    res.render("homepage", {
      articles,
      loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
