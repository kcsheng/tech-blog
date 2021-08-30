const { Comment } = require("../../models");

const router = require("express").Router();

// router.get("/", async (req, res) => {
//   try {
//     const allComments = await Comment.findAll();
//     res.status(200).json(allComments);
//   } catch (err) {
//     res.status500.json(err);
//   }
// });

router.post("/", async (req, res) => {
  try {
    const { text, article_id, commentor_id } = req.body;
    const dbCommentData = await Comment.create({
      text,
      article_id,
      commentor_id,
    });
    if (!dbCommentData) {
      res.status(400).json({ message: "Input data invalid" });
    }
    res.status(200).json(dbCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
