
    const book = require("../controllers/book");

    const router = require("express").Router();
    
    router.post("/create", book.create);
    
    module.exports = router;