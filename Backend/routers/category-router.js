const route = require("express").Router()

const category_controller = require("../controllers/category-controller")

const upload = require("../middlewares/uploadFiles")


route.post("/create", upload.single("photo"), category_controller.create)
route.get("/getAll",category_controller.getAll)
route.get("/getById/:id",category_controller.getById)
route.get("/getByName",category_controller.getByName)
route.put("/update/:id",category_controller.update)
route.delete("/delete/:id",category_controller.delete)



module.exports=route   




