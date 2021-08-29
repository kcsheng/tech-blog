const path = require("path");
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  secret: "xcjsvzo934dklfg34=5-a-secret-key",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessionConfig));

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
