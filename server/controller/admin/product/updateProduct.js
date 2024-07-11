const uploadPermission = require("../../../helpers/permission")
const productModel = require("../../../models/productModel")

async function UpdateProductController (req, res) {
    try {

        const { name, price, description, stock, sellNumber, body, categoryId } = req.body;
        const imageUrl = req.file ? req.file.path : null

        const product = await productModel.findOne({
            where: { id: req.params.id },
        })

        console.log("product update", req.body)

        if (!product) {
            throw new Error("Product not found");
        }

        const updatedProduct = await product.update({
            name,
            price,
            description,
            stock,
            sellNumber,
            body,
            categoryId,
            imageUrl: imageUrl || product.imageUrl,
        });
        
        res.status(200).json({
            message : "Sửa sản phẩm thành công",
            error : false,
            success : true,
            data : updatedProduct
        })
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = UpdateProductController