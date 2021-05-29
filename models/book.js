const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: { type:String, required:true }
})

const bookSchema = new Schema({
    title: { type:String, required:true },
    authors: [authorSchema],
    description: { type:String, required:true },
    image: { type:String, required:true },
    link: { type:String, required:true }
})


const Author = mongoose.model("Book", authorSchema)
const Book = mongoose.model("Book", bookSchema);

module.exports = {Book, Author};