const category_model = require("../models/category-model")
const product_model = require("../models/product-model")

module.exports={
    create:(req,res)=>{

        req.body["image"]= req.file.filename
        

        const category = new category_model(req.body)
        category.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to created category"})
            }else{
                res.status(201).json({message:"category created successuffly", data:item})
            }
        }) 
    },
    getAll:(req,res)=>{
        category_model.find({},(err,items)=>{
            if(err){
                res.status(406).json({message:"failed to get all categories"})
            }else{
                res.status(201).json({message:"list of categories",data:items}) 
            }
        })
    },
    getById:(req,res)=>{
        category_model.findById(req.params.id,(err,item)=>{
            if(err){
                res.status(406).json({message:"cannot get category by this id"})
            }else{
                res.status(201).json({message:"category",data:item})
            }
        }) 
    },
    getByName:(req,res)=>{
        category_model.find({name:req.query.name},(err,items)=>{
         if(err){
            res.status(406).json({message:"failed to get category by this name"})
         }else{
             res.status(201).json({message:"categories",data:items})
         }
        })
    },
    update:(req,res)=>{
        category_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to updated category"})
            }else{
                res.status(200).json({message:"category updated successuffly",data:item})
            }
        })
    },
    delete:(req,res)=>{
        category_model.findByIdAndRemove(req.params.body, (err)=>{
            if(err){
                res.status(406).json({message:"failed to deleted product"})
            }else{
                res.status(201).json({message:"category deleted successuffly"})
            }
        })
    }
 
    

}
