const userModel = require("../models/userModel")

const uploadPermission = async(userId) => {
    const user = await userModel.findOne({userId})
    if(user.role === "ADMIN") {
        return true
    }
    return false
}

module.exports = uploadPermission