const express = require("express") 
const app = express()
const database = require("./config/database")
const dotenv = require("dotenv").config()

app.use(express.json())


const PORT = process.env.PORT 



const category_router = require("./routers/category-router")
app.use("/categories",category_router)    
 
const product_router = require ("./routers/product-router")
app.use("/products",product_router)  


const subcategory_router = require("./routers/subcategory-router")
app.use("/subcategories",subcategory_router) 








app.get("/getImage/:img",function(req,res){
    res.sendFile(__dirname + "/storages/"+ req.params.img)
})




app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})

