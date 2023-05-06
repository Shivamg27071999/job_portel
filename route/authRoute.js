import express from "express"
import { registerController, loginController  } from "../controllers/authControllers.js"
// import { loginController } from "../controllers/loginController.js"

const route = express.Router()

route.post('/register',registerController)
route.post('/login',loginController)


export default route 