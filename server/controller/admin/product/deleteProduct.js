const productModel = require("../../../models/productModel")

async function DeleteProductController (req, res) {
    try {
        const { id } = req.params;

        const product = await productModel.findOne({
            where: { id },
        });

        if (!product) {
            throw new Error("Product not found");
        }

        await product.destroy();

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

module.exports = DeleteProductController;