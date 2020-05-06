var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("<h1>card-game</h1>");
});

router.use("/users", require("./users_controller"));

module.exports = router;
