const router = require("express").Router();
const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");
const articleRoutes = require("./article-routes");

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/articles", articleRoutes);

module.exports = router;
