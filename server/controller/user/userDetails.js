const userModel = require("../../models/userModel")

async function userDetailsController(req,res){
    try{
       // console.log("userId",req.userId)
        const user = await userModel.findOne({
            where: {
                id : req.userId
            }
        })

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "Thông tin tài khoản"
        })

        //console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController