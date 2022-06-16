const express = require("express")
const app = express()
const database = require("./config/database")
const dotenv = require("dotenv").config()

app.use(express.json())


const PORT = process.env.PORT

const admin_router = require("./routers/admin-router")
const auth_router = require ("./routers/auth-router")
const category_router = require ("./routers/category-router")
const client_router = require ("./routers/client-router")
const order_router = require ("./routers/order-router")
const product_router = require ("./routers/product-router")
const provider_router = require ("./routers/provider-router")
const subcategory_controller = require ("./routers/subcategory-router")













app.get("/getImage/:img",function(req,res){
    res.sendFile(__dirname + "/storages/"+ req.params.img)
})




app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})
