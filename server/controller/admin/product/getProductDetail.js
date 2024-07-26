const productModel = require("../../../models/productModel")
const categoryModel = require("../../../models/categoryModel")

async function GetProductDetailController (req, res) {
    try {
        const product = await productModel.findOne({
            where: { id: req.params.id },
            include: {
                model: categoryModel,
                attributes: ['id', 'name']
            }
        });

        res.json({
            message: "Chi tiết sản phẩm",
            success: true,
            error: false,
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error : true,
            success: false,
        })
    }
}

module.exports = GetProductDetailController