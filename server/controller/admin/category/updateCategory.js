const categoryModel = require("../../../models/categoryModel")

async function UpdateCategoryController(req, res) {

    try {
        const { name, description } = req.body;
        const imageUrl = req.file ? req.file.path : null

        const category = await categoryModel.findOne({
            where: { id: req.params.id },
        })

        if (!category) {
            throw new Error("Category not found");
        }
        const updatedCategory = await category.update({
            name,
            description,
            imageUrl: imageUrl || category.imageUrl,
        });

        res.status(200).json({
            message: "Sửa danh mục thành công",
            error: false,
            success: true,
            data: updatedCategory
        })
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = UpdateCategoryController