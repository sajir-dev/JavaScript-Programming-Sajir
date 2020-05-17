const router = require("express").Router();
const Student = require("../models/student/student");

//Creating a student
router.post("/", async (req, res, next) => {
  try {
    let student = await Student.createStudent(req.body);
    res.send(student);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

//Getting all students
router.get("/all", async (req, res, next) => {
  try {
    let response = await Student.getStudents();
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

//Get one student
router.get("/:student_id", async (req, res, next) => {
  try {
    let response = await Student.getStudentInfo(req.params._id);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

//Update one student
router.put("/:student_id", async (req, res, next) => {
  try {
    console.log("inside router put");
    let response = await Student.updateStudent(req.params._id, req.body);
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

//Delete one student
router.delete("/:student_id", async (req, res, next) => {
  try {
    console.log("inside route delete student");
    let respnse = await Student.deleteStudent(req.params._id);
    res.send(respnse);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send(err.message);
  }
});

module.exports = router;
