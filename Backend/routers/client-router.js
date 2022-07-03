

const route = require("express").Router()

const client_controller = require("../controllers/client-controller")

const upload = require("../middlewares/uploadFiles")


route.post("/register",upload.single("photo"),client_controller.register)
route.get("/getAll",client_controller.getAll)
route.get("/getbyid/:id",client_controller.getById)
route.get("/getByName",client_controller.getByName)
route.put("/update/:id",client_controller.update)  
route.delete("/delete/:id",client_controller.delete)       
     
                      

module.exports = route

