const categoryModel = require("../../../models/categoryModel")

async function GetCategoryDetailController(req, res) {
    try {
        const category = await categoryModel.findOne({
            where: { id: req.params.id },
        });

        res.json({
            message: "Chi tiết danh mục",
            success: true,
            error: false,
            data: category
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error : true,
            success: false,
        })
    }
}

module.exports = GetCategoryDetailController