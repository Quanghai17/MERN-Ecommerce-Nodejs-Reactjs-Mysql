const categoryModel = require("../../../models/categoryModel")

const getCategoryController = async (req, res) => {
    try {
        const categories = await categoryModel.findAll()

        res.json({
            message: "Tất cả danh mục",
            success: true,
            error: false,
            data: categories
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error : true,
            success: false,
        })
    }
}

module.exports = getCategoryController
