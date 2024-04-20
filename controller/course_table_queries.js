const db = require("../db/db")

const getAllCourses = async(req, res) => {
    try {
        const courses = await db.select("*").from("courses");
        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllCourses
};