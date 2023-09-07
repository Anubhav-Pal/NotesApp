import Note from "../models/notes.js";

const fetchNotes = async (req, res) => {
    try {
        const Notes = await Note.find();
        res.json(Notes)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
}

const fetchNote = async (req, res) => {
    try {
        const fetchedNote = await Note.findById({ _id: req.params.id });
        res.json(fetchedNote)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
}

const createNote = async (req, res) => {
    const title = req.body.title
    const body = req.body.body

    //create a note with it
    const note = await Note.create({
        title: title,
        body: body
    })

    //respond with the new note
    res.json({ note });
}


const updateNote = async (req, res) => {
    const title = req.body.title
    const body = req.body.body
    try {
        await Note.findByIdAndUpdate(req.params.id, { title: title, body: body });
        const fetchedandUpdatedNote = await Note.findById({ _id: req.params.id });
        res.json(fetchedandUpdatedNote)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
}

const deleteNote = async (req, res) => {
    await Note.deleteOne({ _id: req.params.id })
}


export default { fetchNotes, fetchNote, createNote, updateNote, deleteNote }