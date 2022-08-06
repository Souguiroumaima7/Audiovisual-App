

const route = require("express").Router()

const Subcategory_controller = require("../controllers/Subcategory-controller")
     


route.post("/create",Subcategory_controller.create)
route.get("/getall",Subcategory_controller.getall)
route.get("/getbyid/:id",Subcategory_controller.getbyid)
route.get("/getbyname",Subcategory_controller.getbyname)
route.put("/update/:id",Subcategory_controller.update)
route.delete("/delete/:id",Subcategory_controller.delete)



module.exports=route  


