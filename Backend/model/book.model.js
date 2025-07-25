import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});

const Book = mongoose.model("bookdata", bookSchema);

export default Book;
