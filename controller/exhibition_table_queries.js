const db = require("../db/db")

const getAllExhibitions = async(req, res) => {
    try {
        const exhibitions = await db.select("*").from("exhibitions");
        res.send(exhibitions);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

const searchExhibitions = async(req, res) => {
    try {
        const student_id = parseInt(req.params.student_id);

        const course_id = req.params.course_id;

        const teacher_name = req.params.teacher_name;

        const skill_ids = req.params.skill_ids;
        const skill_ids_str_array = skill_ids.split("_")
        const skill_ids_int_array = skill_ids_str_array.map(Number);
        console.log(skill_ids_str_array);
        console.log(skill_ids_int_array);
        // REFACTORING CHECK: ERROR CHECKING, WHAT IF SOMEONE DOESN'T PUT ANYTHING/PUTS A LETTER INSTEAD OF A NUMBER

        const school_year = req.params.school_year;

        const term = req.params.term;
        
        const selectedExhibitions = 
        await db.select("*").from("exhibitions")
            //.where("student_id", req.params.student_id);
            .modify(function(queryBuilder) {
                if(student_id == 0){
                    queryBuilder.where("student_id", req.params.student_id)
                    // WHERE IN
                }

                if(skill_ids_int_array[0] == 0){
                    this.andWhere(function() {
                        queryBuilder.whereIn("first_skill_id", skill_ids_str_array)
                        .orWhereIn("second_skill_id", skill_ids_str_array)
                        // WHERE IN
                    })
                }
            })
        
        //await db.select("*").from("exhibitions");

        res.send(selectedExhibitions);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllExhibitions,
    searchExhibitions
};