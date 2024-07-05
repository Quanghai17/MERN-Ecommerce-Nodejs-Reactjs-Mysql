const userModel = require("../../models/userModel");
const bcrypt = require('bcryptjs');


async function userSignUpController(req,res){
    try{
        const { email, password, name} = req.body
        const user = await userModel.findOne({ where: { email } })

        console.log("user",user)

        if(user){
            return res.status(400).json({
                message : "Tài khoản email đã được đăng kí",
                error : true,
            })
        }

        if(!email){
           throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "Đăng kí tài khoản thành công!"
        })


    }catch(error){
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = userSignUpController