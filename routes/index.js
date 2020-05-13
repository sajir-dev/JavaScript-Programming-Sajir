var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("<h1>card-game</h1>");
});

router.use("/users", require("./users_controller"));
router.use("/division", require("./division_controller"));
router.use("/marks", require("./marks_controller"));
router.use("/students", require("./student_controller"));

module.exports = router;
