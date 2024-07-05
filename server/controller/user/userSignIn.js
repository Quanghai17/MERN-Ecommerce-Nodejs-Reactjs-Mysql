const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel")
const jwt = require('jsonwebtoken');

async function userSignInController(req, res, next) {
    try {
        const { email, password} = req.body

        if (!email) {
            return res.status(400).json({
                message : "Vui lòng nhập email",
                error : true,
            })
        }

        if (!password) {
            return res.status(400).json({
                message : "Vui lòng nhập mật khẩu",
                error : true,
            })
        }

        const user = await userModel.findOne({ where: { email } })

        if (!user) {
            return res.status(400).json({
                message : "Tài khoản không tồn tại",
                error : true,
            })
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (!checkPassword) {
            return res.status(400).json({
                message: "Mật khẩu sai",
                error: true,
            })
        }

        if (checkPassword) {
            const tokenData = {
                _id : user.id,
                email : user.email,
            }

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn : '1d'})
            const tokenOption = {
                httpOnly : true,
                secure : true
            }
    
            res.cookie("token",token,tokenOption).status(200).json({
                message : "Đăng nhập thành công",
                data : token,
                success : true,
                error : false
            })
    
           }else{
             throw new Error("Vui lòng xem lại mật khẩu")
           }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true,
        })
    }
}

module.exports = userSignInController