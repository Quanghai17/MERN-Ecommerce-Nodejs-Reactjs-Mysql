const cartModel = require("../../../models/cartModel");

async function DeleteProductCartController (req, res) {
    try {
        const { id } = req.params;
        const cart = await cartModel.findOne({
            where: { id },
        });

        console.log("cart", cart);

        if (!cart) {
            throw new Error("Product not found");
        }

        await cart.destroy();

        res.status(200).json({
            message: "Xóa sản phẩm thành công",
            error: false,
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = DeleteProductCartController; 