import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //Initialice dotenv

const mongoDbURL = process.env.MONGODB_URL_STRING as string;

//IIFE = Immediately Invoked Funtion Expression
export default (async () => {
    try {
        await mongoose.connect(mongoDbURL);
        console.log("Mongodb Connected!!!");
    } catch (error) {
        console.log("Error :>> ", error);
        process.exit(1);
    }
})();