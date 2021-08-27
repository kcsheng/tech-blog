const { Article } = require("../models");

const articleData = [
  {
    title: "How to master html",
    content:
      "Website design and development has changed significantly over the past decade to bring forth highly interactive and responsive user interfaces we see around the internet. Before a website goes live, designers and developers go through a rigorous process that involves planning, visual designing, development, and testing.",
    creator_id: 1,
  },
  {
    title: "How to master css",
    content:
      "CSS is a very vast topic seems to be easy at first, but it becomes a pain in a head when you want to master it not for lack of tutorials but for lack of path or full curriculum to mastering it, here I am going to show you how to master CSS by following a curriculum contain very comprehensive resources from the internet, and sure it will be free.",
    creator_id: 2,
  },
  {
    title: "How to master javascript",
    content:
      "JavaScript is an amazing programming language. It is most popular as the browser's programming language, but that does not mean that's all it is good for. It is used for much more...backend development, desktop development, machine learning, and many more.",
    creator_id: 3,
  },
];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;
