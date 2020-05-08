const router = require ('express').Router();
const Division = require ('../models/division/division');

//create division
router.post("/", async = (req, res, next) => {
    try {
        let division = await Division.createDivision(req.body);
        res.send (division);
    } catch(err) {
        console.log(err);
        res.status(400);
        res.send(err);
    }
});

router.get ('/divisions', async = (req, res, next) => {
    try {
        const division = await Division.getDivision();
        res.send (division);
    } catch (err) {
        res.status (400);
        res.send (err)
    }
});

router.put ('/divisions/:division_id', async = (req, res, next) => {
    try {
        const division = Division.updateDivision(req.body);
        res.send (division);
    } catch (err) {
        err.status = 400;
        next (err);
    }
});

router.delete ('/divisions/:division_id', async = (req, res, next) => {
    try {
        await Division.deleteDivision (req.params._id);
        res.send({success: true});
    } catch (err) {
        err.status = 400;
        next (err);
    }
});

module.exports = router;

