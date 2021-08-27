const User = require("./User");
const Article = require("./Article");
const Comment = require("./Comment");

User.hasMany(Article, {
  foreignKey: "creator_id",
});

Article.belongsTo(User, {
  foreignKey: "creator_id",
});

Article.hasMany(Comment, {
  foreignKey: "article_id",
});

Comment.belongsTo(Article, {
  foreignKey: "article_id",
});

User.hasMany(Comment, {
  foreignKey: "commentor_id",
});

Comment.belongsTo(User, {
  foreignKey: "commentor_id",
});

module.exports = { User, Article, Comment };
