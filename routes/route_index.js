const express = require('express');
const exhibitionController = require('../controller/exhibition_table_queries');
const studentController = require('../controller/student_table_queries');
const skillController = require('../controller/skill_table_queries');
const courseController = require('../controller/course_table_queries');
// ONE CONTROLLER FOR EACH TABLE

const router = express.Router();
//router.post('/person', personController.createPerson);

module.exports = router;

//router.get("/api/skills", exhibitionController.getAllSkills);
//router.get("/api/courses", exhibitionController.getAllCourses);
router.get("/api/exhibitions", exhibitionController.getAllExhibitions);

router.get("/api/search/:student_id/:course_id/:teacher_id/:skill_ids/:academic_year/:term", exhibitionController.searchExhibitions);

router.get('/health', async(req, res) => {
    res.send("hello world :)");
});
// api/search/101/0/0/1/0/0