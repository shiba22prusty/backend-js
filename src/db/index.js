import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
       
    //    console.log(connectionInstance);
    //    connection.host is use to show the which host we connected
       
    } catch (error) {
        console.log("MONGODB connection Failed", error);
        process.exit(1)
        //node js give access to process current application mejo process chal rahahe uska reference he, uska bohot method he.
    }
}

export default connectDB