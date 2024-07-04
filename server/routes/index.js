const express = require('express')
const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")

router.post("/signup",userSignUpController)

module.exports = router