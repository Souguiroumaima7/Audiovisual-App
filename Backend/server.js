const express = require("express")
const cors = require("cors")
/* const bodyParser =  require('body-parser')  ; */
const app = express()
const database = require("./config/database")
const dotenv = require("dotenv").config()


app.use(express.json())
app.use(cors())


const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
 
    // Parsing the URL
    var request = url.parse(req.url, true);
 
    // Extracting the path of file
    var action = request.pathname;
 
    // Path Refinements
    var filePath = path.join(__dirname,
            action).split("%20").join(" ");
 
    // Checking if the path exists
    fs.exists(filePath, function (exists) {
 
        if (!exists) {
            res.writeHead(404, {
                "Content-Type": "text/plain" });
            res.end("404 Not Found");
            return;
        }
 
        // Extracting file extension
        var ext = path.extname(action);
 
        // Setting default Content-Type
        var contentType = "text/plain";
 
        // Checking if the extension of
        // image is '.png'
        if (ext === ".png") {
            contentType = "image/png";
        }
 
        // Setting the headers
        res.writeHead(200, {
            "Content-Type": contentType });
 
        // Reading the file
        fs.readFile(filePath,
            function (err, content) {
                // Serving the image
                res.end(content);
            });
    });
})
   

/* app.use(bodyParser.urlencoded({extended:false})) ; */


const PORT = process.env.PORT


const product_router = require("./routers/product-router")
const category_router = require("./routers/category-router")
const subcategory_router = require("./routers/Subcategory-router")
const order_router = require("./routers/order-router")
const client_router = require("./routers/client-router")
const provider_router = require ("./routers/provider-router")
const auth_router = require("./routers/auth-router")
const admin_router = require("./routers/admin-router")
    
/* app.use(bodyParser.urlencoded({ extended: true }));            
      */
app.use("/products",product_router)
app.use("/categories",category_router)
app.use("/subcategory",subcategory_router)
app.use("/orders",order_router)
app.use("/clients",client_router)
app.use("/Providers",provider_router)
app.use ("/auth",auth_router)
app.use("/admin",admin_router)


app.get('/getfile/:image',function(req,res){
//pour faire affichage image sur postman
    res.sendFile(__dirname+'/storages/'+req.params.image)
  })
     
app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})

          
     