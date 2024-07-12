const cartModel = require("../../../models/cartModel");

async function AddToCartController(req, res) {
    try {
        const { productId } = req.body
        const currentUser = req.userId

        const isProductAvailable = await cartModel.findOne({
            where: { productId: productId, userId: currentUser },
        })

        if (isProductAvailable) {
            return res.status(400).json({
                message: "Sản phẩm đã có trong giỏ hàng của bạn",
                error: true,
                success: false,
            })
        } else {
            const newCart = await cartModel.create({
                userId: currentUser,
                productId: productId,
                ququantity: 1,
              });

            return res.status(200).json({
                data: newCart,
                message: "Sản phẩm đã được thêm vào giỏ hàng",
                success: true,
                error: false
            })
        }

    } catch (error) {
        res.json({
            message: error?.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = AddToCartController