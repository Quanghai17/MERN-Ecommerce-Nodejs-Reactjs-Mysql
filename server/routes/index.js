const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSignIn")
const authToken = require("../middleware/authToken")
const userDetailsController = require("../controller/user/userDetails")
const userLogoutController = require("../controller/user/userLogout")

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/userDetail",authToken, userDetailsController )
router.get("/userLogout",userLogoutController)

module.exports = router