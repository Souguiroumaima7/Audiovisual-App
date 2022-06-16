const user_model = require("./user-model")

const mongoose = require('mongoose')    



const adminSchema = new mongoose.Schema ({
     

    login : {
        type: String , 
        required : true 
    },

    password : {
        type : String , 
        required : true 
    }

})



const admin  = user_model.discriminator("admin",adminSchema)      


module.exports = mongoose.model("admin")



