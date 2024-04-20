const express = require('express');
const exhibitionController = require('../controller/exhibition_table_queries');
const studentController = require('../controller/student_table_queries');
const skillController = require('../controller/skill_table_queries');
const courseController = require('../controller/sourse_table_queries');
// ONE CONTROLLER FOR EACH TABLE

const router = express.Router();
//router.post('/person', personController.createPerson);

module.exports = router;

router.get("api/exhibitions", exhibitionController.getAllExhibitions);

router.get("api/exhibitions/:id", exhibitionController.getAllExhibitions);