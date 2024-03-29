const mongoose = require("mongoose")


const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
 image:{
    type:String,
   required:true
    },
       products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }]

},{timestamps:true})

module.exports= mongoose.model("categories",categorySchema)
