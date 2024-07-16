const categoryModel = require("../../../models/categoryModel")

async function GetCategoriesController (req, res) {
    try {
        const categories = await categoryModel.findAll();
        res.status(200).json({
            message: "Lấy danh sách danh mục thành công",
            error: false,
            success: true,
            data: categories
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

module.exports = GetCategoriesController;