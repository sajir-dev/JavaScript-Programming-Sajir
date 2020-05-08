const router = require ('express').Router
const Student = require ('../models/student/student');

router.post ('/', async = (req, res, next) => {
    try {
        let student = await Student.createStudent(req.body);
        res.send (student);
    } catch (err) {
        console.log(err);
        res.status (400);
        res.send(err.message);
    }
});

router.get ('/students', async = (req, res, next) => {
    try {
        return await Student.getStudent();
    } catch (err) {
        console.log(err);
        res.status(400);
        res.send (err.message)
    }
});

router.get ('/students/:student_id', async = (req, res, next) => {
    try {
        return await Student.getStudentInfo(req.params._id);
    } catch (err) {
        console.log(err);
        res.status (400);
        res.send (err.message);
    }
});

router.put ('/students/:student_id', async = (req, res, next) => {
    
})