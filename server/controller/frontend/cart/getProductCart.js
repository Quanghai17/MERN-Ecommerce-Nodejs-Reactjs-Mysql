const cartModel = require("../../../models/cartModel");
const productModel = require("../../../models/productModel");

async function GetProductCartController (req, res) {
    try{
        const userId = req.userId

        const products = await cartModel.findAll({
            where: { userId: userId },
            include: {
                model: productModel,
                attributes: ['id', 'name', "imageUrl", "price",]
            }
        });

        res.json({
            data : products,
            message : "Danh sách sản phẩm trong giỏ hàng",
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

module.exports = GetProductCartController;