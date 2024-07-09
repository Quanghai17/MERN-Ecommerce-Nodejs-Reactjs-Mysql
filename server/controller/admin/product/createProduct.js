const uploadPermission = require("../../../helpers/permission")
const productModel = require("../../../models/productModel")

async function CreateProductController(req, res) {
    try {
        const sessionUserId = req.userId
        if(!uploadPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
        //  console.log("product", req.body)
        const { name, price, description, stock, imageUrl, sellNumber, body } = req.body;

        const newProduct = await productModel.create({
            name,
            price,
            description,
            stock,
            imageUrl,
            sellNumber,
            body
          });

        res.status(201).json({
            message : "Thêm sản phẩm thành công",
            error : false,
            success : true,
            data : newProduct
        })
    } catch (error) {
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

module.exports = CreateProductController