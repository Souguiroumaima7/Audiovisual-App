
const express = require("express")
const route = express.Router()

const orders_controller = require("../controllers/orders-controller")

 
route.post("/create",orders_controller.create)
route.get("/getById/:id",orders_controller.getById)
route.get("/getByName",orders_controller.getByName)      
route.put("/update/:id",orders_controller.update)
route.delete("/delete/:id",orders_controller.delete)    
  

module.exports = route        


