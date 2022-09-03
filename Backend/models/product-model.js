const mongoose = require("mongoose")


const GallerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true 
    }
})
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{     
        type:String,
        required:true
    },

   galleries:[GallerySchema],

    orders:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"orders"
    }]


},{timestamps:true})
module.exports = mongoose.model("products",productSchema)