const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSignIn")
const authToken = require("../middleware/authToken")
const userDetailsController = require("../controller/user/userDetails")
const userLogoutController = require("../controller/user/userLogout")

const authController = require("../controller/admin/auth/authController")
const createProduct = require("../controller/admin/product/createProduct")

//api user
router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/userDetail",authToken, userDetailsController )
router.get("/userLogout",userLogoutController)

//api admin
router.post("/admin/login",authController)
//product admin
router.post("/admin/createProduct",authToken, createProduct)

module.exports = router