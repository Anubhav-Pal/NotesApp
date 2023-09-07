import Note from "../models/notes.js";

// These here are all the routes of our express app

// Fetch all the notes
const fetchNotes = async (req, res) => {
    try {
        const Notes = await Note.find();
        res.json(Notes)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
}

// Fetch a single note
const fetchNote = async (req, res) => {
    try {
        const fetchedNote = await Note.findById({ _id: req.params.id });
        res.json(fetchedNote)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
}

// Create a note
const createNote = async (req, res) => {

    // const title = req.body.title
    // const body = req.body.body
    //modern syntax
    const { title, body } = req.body

    //create a note with it
    const note = await Note.create({
        title,
        body,
    })

    //respond with the new note
    res.json({ note });
}

// Update a note
const updateNote = async (req, res) => {

    // const title = req.body.title
    // const body = req.body.body
    const { title, body } = req.body

    try {
        await Note.findByIdAndUpdate(req.params.id, { title: title, body: body });
        const fetchedandUpdatedNote = await Note.findById({ _id: req.params.id });
        res.json(fetchedandUpdatedNote)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
}

//Delete a note
const deleteNote = async (req, res) => {
    await Note.deleteOne({ _id: req.params.id })
}


export default { fetchNotes, fetchNote, createNote, updateNote, deleteNote }