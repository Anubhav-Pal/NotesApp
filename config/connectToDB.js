import mongoose from "mongoose";
import 'dotenv/config'

async function connectToDB(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to database"); 
    } catch (error) {
        console.log(error);
        
    }   
}

export default connectToDB
