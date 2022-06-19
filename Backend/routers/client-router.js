

const route = require("express").Router()

const client_controller = require("../controllers/client-controller")

const upload = require("../middlewares/uploadFiles")


route.post("/register",upload.single("photo"),client_controller.register)




module.exports = route

