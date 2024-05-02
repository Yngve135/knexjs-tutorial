const express = require('express');
const exhibitionController = require('../controller/exhibition_table_queries');
const userController = require('../controller/user_table_queries');
const skillController = require('../controller/skill_table_queries');
const courseController = require('../controller/course_table_queries');
// ONE CONTROLLER FOR EACH TABLE

const router = express.Router();
//router.post('/person', personController.createPerson);

module.exports = router;

router.get("/api/skills", skillController.getAllSkills);
router.get("/api/course_names", courseController.getUniqueCourseNames);
router.get("/api/course_id/:course_name", courseController.getCourseIdFromCourseName);

router.get("/api/exhibitions", exhibitionController.getAllExhibitions);
router.get("api/exhibitions/homepage", exhibitionController.getExhibitionsHomePage);

router.get("/api/students", userController.getAllStudents);
router.get("/api/teachers", userController.getAllTeachers);
router.get("/api/academic_years", courseController.getAcademicYears);



router.get("/api/search/:student_id/:course_id/:teacher_id/:skill_ids/:academic_year/:term", exhibitionController.searchExhibitions);

router.get('/health', async(req, res) => {
    res.send("hello world");
});
// api/search/101/0/0/1/0/0