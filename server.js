//Import dependencies
import Express from "express";
import 'dotenv/config'  //load env variables
import connectToDB from "./config/connectToDB.js";
import Note from "./models/notes.js";


//Create an express app
const app = Express();
app.use(Express.json());

// Connect to database
connectToDB();

//routing
app.get('/', (req, res) => {
    res.json({ Hello: "World" })
})

app.get('/notes', async (req, res) => {
    try {
        const Notes = await Note.find();
        res.json(Notes)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
})

app.get('/notes/:id', async (req, res) => {
    try {
        const fetchedNote = await Note.findById({ _id: req.params.id });
        res.json(fetchedNote)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
})

app.post('/notes', async (req, res) => {
    const title = req.body.title
    const body = req.body.body

    //create a note with it
    const note = await Note.create({
        title: title,
        body: body
    })
    
    //respond with the new note
    res.json({ note });
})


app.put('/notes/:id', async (req, res) => {
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
})
//start our server 
app.listen(process.env.PORT, () => {
    console.log("Server started at " + process.env.PORT);
});