const admin_model  = require ("../models/provider-model")


module.exports={

    register:(req,res)=>{

        req.body["image"] = req.file.filename
        
           const admin = new provider_model(req.body)
           provider.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save admin "+err})
            }else{
                res.status(201).json({message:"admin saved successfully",data:item})
            }
           })
         }
    
      
       
}      
