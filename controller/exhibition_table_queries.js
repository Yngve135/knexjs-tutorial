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

module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllExhibitions
};