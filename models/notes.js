import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    body: String
})

const Note = new mongoose.model('Note', noteSchema);

export default Note