const { Comment } = require("../models");

const commentData = [
  {
    text: "I enjoy your point of view.",
    article_id: 3,
    commentor_id: 2,
  },
  {
    text: "This is such a good article. Everyone should read.",
    article_id: 2,
    commentor_id: 1,
  },
  {
    text: "I don't agree what you write about that technology.",
    article_id: 1,
    commentor_id: 3,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
