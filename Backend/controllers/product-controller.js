const product_model = require("../models/product-model")
const sub_category_model = require("../models/subcategory-model")   

module.exports = {
    create : (req,res) => {
        req.body["galleries"]=req.files.length <= 0 ? [] :req.files.map(function(file) {
            return { name: file.filename, description: "add prod" };
        }); 
        const product = new product_model(req.body)
        product.save(req.body,(err,item)=>{
            if (err) {
                res.status(406).json({message : "failed to save product "})
            }else {
                sub_category_model.findByIdAndUpdate(req.body.subcategory, {$push:{products:product}},()=> {
                    res.status(201).json({message : "product created successfully ", data:item})
                })
                
            }
        })
    }, 
    getAll:(req,res)=>{
        product_model.find({}).populate("subcategory").exec((err,items)=> {
            if (err) {
                res.status(406).json({message: "failed to get all products "})

            }else {
                res.status(201).json({message : "list of products " , data:items})
            }
        })
    },
getById : (req,res) => {
    product_model.find(req.params.id,(err,item) => {
        if (err) {
            res.status(406).json({message : "cannot get Product by this id "})
        }else {
            res.status(201).json({message : "product",data:item})
        }
    })
},
getByName : (req,res)=> {
    product_model.find({name:req.query.name}, (err,items)=>{
        if(err){
            res.status(406).json({message : "failed to get product by this name"})
        }else  {
            res.status(201).json({message:"products", data:items})
        }
    })
},
update: (req,res) =>{
    product_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item) => {
        if (err)  {
            res.status(406).json ({message:"failed to updated product"})
        }else {
            res.status(200).json({message : "product updated successfully ", data:item})
        }
        
    })
},
delete : (req,res)=>{
    product_model.findByIdAndDelete(req.params.id ,(err) => {
        if (err) {
            res.status(406).json({message : "failed to deleted product "})
        }else {
            res.status(201).json({message:"product deleted successfully "})
        }
    })
}

}

