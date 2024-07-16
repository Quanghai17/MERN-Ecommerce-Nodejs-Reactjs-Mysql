const productModel = require("../../../models/productModel");
const categoryModel = require("../../../models/categoryModel")

async function GetProductsByCategoryController(req, res) {
    try {
        const { categoryId } = req.params;
       // console.log("categoryId", categoryId);
        const products = await productModel.findAll({
            where: { categoryId },
            include: [{ model: categoryModel, attributes: ['name'] }]
        });
        res.status(200).json({
            message: "Lấy danh sách sản phẩm thành công",
            error: false,
            success: true,
            data: products
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = GetProductsByCategoryController;