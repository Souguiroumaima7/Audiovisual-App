
const route = require("express").Router()


const admin_Controller = require("../controllers/admin-controller")

const upload = require("../middlewares/uploadFiles")


route.post("/register",upload.single("photo"),admin_Controller.register)




module.exports = route