const db = require("../db/db")

const getAllStudents = async(req, res) => {
    try {
        const students = await db.select("*").from("students");
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllStudents
};