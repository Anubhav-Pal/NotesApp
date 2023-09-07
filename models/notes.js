import mongoose from "mongoose";


// Notes Schema
const noteSchema = new mongoose.Schema({
    title: String,
    body: String
})


// New Note Model/Collection
const Note = new mongoose.model('Note', noteSchema);

export default Note