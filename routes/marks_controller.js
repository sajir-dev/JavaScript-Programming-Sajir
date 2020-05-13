const router = require("express").Router();
const Mark = require("../models/marks/marks");

router.post("/", async (req, res, next) => {
  try {
    let response = await Mark.createMark(req.body);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

router.get("/", async (req, res, next) => {
  try {
    let response = await Mark.getMarkInASubject();
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

router.put("/", async (req, res, next) => {
  // try {
  //     let response = await Mark.updateMark (req.body);
  //     res.send(response);
  // } catch (err) {
  //     console.log(err);
  //     res.status(400);
  //     console.log(err.message);
  // }
});

module.exports = router;
