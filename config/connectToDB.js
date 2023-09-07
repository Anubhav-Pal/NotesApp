import mongoose from "mongoose";
import 'dotenv/config'  //load env variables


async function connectToDb(){
    await mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("Connected to database");
    })
}

export default connectToDb