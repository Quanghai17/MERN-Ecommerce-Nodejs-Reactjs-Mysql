const cartModel = require("../../../models/cartModel");

async function GetCountCartController (req, res) {
    try{
        const userId = req.userId

        const count = await cartModel.count({
            where: { userId: userId },
        });

        res.json({
            data : count,
            message : "Số lượng sản phẩm",
            error : false,
            success : true
        })
    }catch(error){
        res.json({
            message : error.message || error,
            error : false,
            success : false,
        })
    }
}

module.exports = GetCountCartController