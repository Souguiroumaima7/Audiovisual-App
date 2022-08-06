const route = require("express").Router()


const admin_Controller = require("../controllers/admin_controller")

const upload = require("../middlewares/uploadFiles")


route.post("/register",admin_Controller.register)
route.get("/getall",admin_Controller.getAll)
route.get("/getById/:id",admin_Controller.getById)
route.get("/getByName",admin_Controller.getByName)
route.put("/update/:id", admin_Controller.update)
route.delete("/delete/:id",admin_Controller.delete)

               
module.exports = route