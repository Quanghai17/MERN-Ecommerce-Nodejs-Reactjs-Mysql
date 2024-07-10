const productModel = require("../../../models/productModel")
const categoryModel = require("../../../models/categoryModel")

const getProductController = async (req, res) => {
    try {
        const products = await productModel.findAll({
            include: {
                model: categoryModel,
                attributes: ['id', 'name']
            }
        });

        res.json({
            message: "Tất cả sản phẩm",
            success: true,
            error: false,
            data: products
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error : true,
            success: false,
        })
    }
}

module.exports = getProductController