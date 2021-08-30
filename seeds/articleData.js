const { Article } = require("../models");

const articleData = [
  {
    title: "How to get good at javascript",
    content:
      "Aliquam viverra laoreet orci ut interdum. Aliquam diam augue, dictum convallis nisi at, egestas vehicula ligula. Integer enim sem, convallis sed urna ac, consectetur suscipit risus. Nulla sit amet semper ante. Aliquam erat volutpat. Sed aliquam arcu quis bibendum ultrices. Nunc consectetur nunc eget ante vestibulum accumsan. Cras iaculis faucibus mollis.",
    creator_id: 1,
  },
  {
    title: "How to master css",
    content:
      "vitae dictum velit. Nullam sodales luctus nibh, eget vehicula tellus tincidunt vel. Donec at ultrices odio. Ut ut dictum mi, sit amet iaculis dolor. Quisque mattis laoreet lorem, nec cursus ante fermentum non. Donec scelerisque auctor accumsan. Arra ac non mauris. Nam convallis ultrices diam vitae tristique. Donec sed feugiat eros. Aliquam sollicitudin",
    creator_id: 2,
  },
  {
    title: "How to learn HTML",
    content:
      "Morbi tempus massa vitae libero aliquet sollicitudin. Vivamus urna nisi, laoreet et neque quis, commodo tempor enim. Vivamus iaculis pharetra massa eu efficitur. Praesent et lorem quis nisl ornare pharetrtae mauris placerat, at ultrices nunc iaculis. Integer urna sapien, lacinia nec lacinia in, hendrerit eu puru",
    creator_id: 3,
  },
];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;
