const categoryModel = require("../../../models/categoryModel")

async function DeleteCategoryController (req, res) {
    try {
        const { id } = req.params;
        const category = await categoryModel.findOne({
            where: { id },
        });

        if (!category) {
            throw new Error("Danh mục không tồn tại");
        }

        await category.destroy()
        res.status(200).json({
            message: "Xóa danh mục thành công",
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

module.exports = DeleteCategoryController;
