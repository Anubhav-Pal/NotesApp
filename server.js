//Import dependencies
import Express from "express";
import 'dotenv/config'  //load env variables
import connectToDB from "./config/connectToDB.js";
import Note from "./models/notes.js";
import notesController from "./controllers/notesController.js";


//Create an express app
const app = Express();

// Middleware
app.use(Express.json());

// Connect to database
connectToDB();

//routing
app.get('/', (req, res) => {
    res.json({ Hello: "World" })
})

app.get('/notes', notesController.fetchNotes)

app.get('/notes/:id', notesController.fetchNote)

app.post('/notes', notesController.createNote)

app.put('/notes/:id', notesController.updateNote)

app.delete('/notes/:id', notesController.deleteNote)


//start our server 
app.listen(process.env.PORT, () => {
    console.log("Server started at " + process.env.PORT);
});