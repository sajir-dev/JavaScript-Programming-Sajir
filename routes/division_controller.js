const router = require("express").Router();
const Division = require("../models/division/division");

//create division
router.post("/", async (req, res, next) => {
  try {
    let division = await Division.createDivision(req.body);
    res.send(division);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err);
  }
});

//get All divisions
router.get("/", async (req, res, next) => {
  try {
    const division = await Division.getDivisions();
    res.send(division);
  } catch (err) {
    res.status(400);
    res.send(err);
  }
});

//get a division
router.get("/:division_id", async (req, res, next) => {
  try {
    let division = await Division.getADivision(req.params._id);
    res.send(division);
  } catch (err) {
    console.log(err);
    err.status = 400;
    next(err);
  }
});

//update a division
router.put("/:division_id", async (req, res, next) => {
  try {
    let division = await Division.updateDivision(req.params, req.body);
    res.send(division);
  } catch (err) {
    err.status = 400;
    next(err);
  }
});

//delete a division
router.delete("/:division_id", async (req, res, next) => {
  try {
    Division.deleteDivision(req.params);
    res.send("item removed");
  } catch (err) {
    err.status = 400;
    next(err);
  }
});

module.exports = router;
