//Import dependencies
import Express from "express";
import 'dotenv/config'  //load env variables
import connectToDb from "./config/connectToDB.js";


//Create an express app
const app = Express();

// Connect to database
connectToDb();

//routing
app.get('/', (req, res) => {
    res.json({ Hello: "World" })
})

//start our server 
app.listen(process.env.PORT, () => { console.log("Server started at 3000"); })
