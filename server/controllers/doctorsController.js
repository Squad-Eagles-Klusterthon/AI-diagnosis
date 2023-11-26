const data = require("../data.json")

/**
 * @desc Get result from openAI
 * @route GET /api/chats
 * @return the response object from api call
 */
const fetchAllDoctors = async (req, res) => {
    try {
        res.json(data);
    } catch (error) {
        console.log("error", error);
        res.json(error);
    }
};


module.exports = { fetchAllDoctors };