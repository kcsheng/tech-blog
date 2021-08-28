const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
