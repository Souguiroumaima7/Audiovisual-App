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

const provider_router = require ("./routers/provider-router")
app.use("/providers",provider_router)  

const order_router = require("./routers/order-router")     
app.use("/orders",order_router)    

const client_router = require ("./routers/client-router")
app.use("/clients",client_router)     



app.get("/getImage/:img",function(req,res){
    res.sendFile(__dirname + "/storages/"+ req.params.img)
})




app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})

