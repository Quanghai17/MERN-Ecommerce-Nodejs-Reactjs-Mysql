const cartModel = require("../../../models/cartModel");

async function DeleteAllProductController (req, res) {
    try { 
        const userId = req.userId
        const cart = await cartModel.destroy({
            where: { userId: userId },
        });

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

module.exports = DeleteAllProductController