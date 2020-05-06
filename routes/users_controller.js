const router = require("express").Router();
const User = require("@models/users/user");

// create user
router.post("/", async (req, res, next) => {
  try {
    let response = await User.createUser(req.body);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

module.exports = router;
