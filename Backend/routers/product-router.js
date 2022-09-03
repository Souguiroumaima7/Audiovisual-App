const express = require("express")
const route = express.Router()

const product_controller = require("../controllers/product-controller")

const upload = require("../middlewares/uploadFiles")


route.post("/create",upload.array("photo"),product_controller.create)
route.get("/getAll",product_controller.getAll)
route.get("/getbyid/:id",product_controller.getById)
route.get("/getbyname",product_controller.getByName)
route.put("/update/:id",product_controller.update)
route.delete("/delete/:id",product_controller.delete)
      
        

   
  
module.exports = route