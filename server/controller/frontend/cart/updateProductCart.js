const cartModel = require("../../../models/cartModel");

async function UpdateProductCartController(req, res) {
    try {
        const { productId } = req.body
        const currentUser = req.userId
       // console.log("currentUser", currentUser);
        const qty = req.body.quantity;

        const product = await cartModel.update(
            { quantity: qty },
            {
                where: {
                    userId: currentUser,
                    productId: productId
                }
            },
            
        );

       //console.log("product", product);

        if (!product) {
            return res.status(404).json({
                message: "Sản phẩm không thay đổi số lượng",
                error: true,
                success: false
            });
        }

        res.status(200).json({
            message: "Update số lượng thành công",
            data: { userId: currentUser, productId: productId, quantity: qty },
            error: false,
            success: true
        });
    } catch (error) {
        res.json({
            message: error.message || error,
            error: false,
            success: false,
        })
    }
}

module.exports = UpdateProductCartController;