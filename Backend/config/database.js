const mongoose = require("mongoose")
const dotenv = require("dotenv").config()


const DB = process.env.URI


const database = mongoose.connect(DB,(err)=>{
    if(!err){
        console.log("mongodb connect successfully")
    }else{
        console.log("failed to connect with mongodb")
    }
})




module.exports = database
