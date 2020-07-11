const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookSchema = new Schema ({
    title : String,
    author : String,
    publisher : String,
    releaseDate : Date
},
{
    timestamps : true
});

var Book = mongoose.model("Book", bookSchema);
    module.exports = Book;