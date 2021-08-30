const router = require("express").Router();
const { User, Article, Comment } = require("../models");
const withAuth = require("../utils/auth");

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
    res.render("article", { article, loggedIn, loggedInUserId });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userArticlesRaw = await Article.findAll({
      where: { creator_id: req.session.loggedInUserId },
    });
    const articles = userArticlesRaw.map((blog) => blog.get({ plain: true }));

    req.session.save(() => {
      req.session.inDashboard = true;
      const inDashboard = req.session.inDashboard;
      const loggedIn = req.session.loggedIn;
      res.render("dashboard", { articles, inDashboard, loggedIn });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard/article/:id", async (req, res) => {
  try {
    const dbArticleData = await Article.findByPk(req.params.id);
    const article = dbArticleData.get({ plain: true });
    const loggedIn = req.session.loggedIn;
    const inDashboard = req.session.inDashboard;
    res.render("edit", { article, loggedIn, inDashboard });
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
