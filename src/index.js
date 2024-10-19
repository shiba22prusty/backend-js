
// require('dotenv').config({path: './.env'}) 
// this above line destroy the code consitensi  require & import
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// enviromental veriable when application load  access in all file when we config in main file .{connectDB} access index.js file avalable in other all files 


// improved version
dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR:", error);
        throw error
       })
    app.listin(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
        
    })
})
.catch(()=>{
    console.log("Mongo DB connection failed !!! ", err)
})



































/*
import express from "express";
const app = express()
// iffees is user for immidate  action, before iffee use semicolon(;) for clining porpose otherwise error arrises
;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERROR:", error);
        throw error
       })

       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
       })


    } catch (error) {
       console.error("ERROR", error)
       throw err
        
    }
})()
    */