const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This is from api users route");
});

module.exports = router;
