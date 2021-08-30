const router = require("express").Router();
const { Article } = require("../../models");

router.put("/:id", async (req, res) => {
  try {
    const { title, content, creator_id } = req.body;
    const dbData = await Article.update(
      {
        title,
        content,
        creator_id,
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      }
    );

    if (!dbData) {
      res.status(400).json({ message: "No record found" });
      return;
    }
    res.status(200).json(dbData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = Article.destroy({
      where: { id: req.params.id },
    });
    if (!result) {
      res.status(400).json({ message: "Article not found" });
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/add-form", async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    const inDashboard = req.session.inDashboard;
    res.render("add", { loggedIn, inDashboard });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const creator_id = req.session.loggedInUserId;
    const dbArticleData = await Article.create({
      title,
      content,
      creator_id,
    });
    if (!dbArticleData) {
      res.status(400).json({ message: "Input data invalid" });
    }
    res.status(200).json(dbArticleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
