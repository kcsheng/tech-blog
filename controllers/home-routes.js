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
    const loggedInUserId = req.session.loggedInUserId;
    // The follwoing code brings the log in state into views
    res.render("homepage", {
      articles,
      loggedIn,
      loggedInUserId,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/article/:id", async (req, res) => {
  try {
    const dbArticleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["id", "text", "commentor_id", "createdAt"],
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    const article = dbArticleData.get({ plain: true });
    const comments = article.comments.map((comment) => {
      return {
        id: comment.id,
        text: comment.text,
        commentor: comment.user.username,
        createdAt: comment.createdAt,
      };
    });
    article.comments = comments;
    const loggedIn = req.session.loggedIn;
    const loggedInUserId = req.session.loggedInUserId;
    console.log(loggedIn);
    console.log(loggedInUserId);
    res.render("article", { article, loggedIn, loggedInUserId });
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
