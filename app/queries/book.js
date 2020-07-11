const Book = require("../models/book");
const debug = require("debug");

async function create () {
    var log = debug("queries:addbook");
    log("addbook");
    try {
        let result = await Book.create();
        log('result', result);
    } catch(error) {
        throw error;
    }
}

module.exports = {
    create
}