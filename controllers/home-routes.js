const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("This comes from homeroutes in controller");
});

module.exports = router;
