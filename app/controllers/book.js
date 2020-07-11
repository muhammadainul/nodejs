const Book = require("../queries/book");
const debug = require("debug");

exports.create = async (req, res) => {
    let log = debug("createuser");
    let data = req.body
    try {
        let result = await Book.create(data);
        log('result', result);
        res.send("hi");
    } catch(error) {
        throw error;
    }
}