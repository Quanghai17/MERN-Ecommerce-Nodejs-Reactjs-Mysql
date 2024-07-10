const uploadPermission = require("../../../helpers/permission") 
const categoryModel = require("../../../models/categoryModel")

async function CreateCategoryController (req, res) {
    try {
        const sessionUserId = req.userId
        if(!uploadPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
        const { name, description } = req.body;
        const imageUrl = req.file ? req.file.path : null; 

        const newCategory = await categoryModel.create({
            name,
            description,
            imageUrl
            
        })

        res.status(201).json({
            message : "Thêm danh mục thành công",
            error : false,
            success : true,
            data : newCategory
        })
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = CreateCategoryController