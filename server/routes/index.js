const express = require('express')
const router = express.Router()
const upload = require ('../config/multerConfig')

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSignIn")
const authToken = require("../middleware/authToken")
const userDetailsController = require("../controller/user/userDetails")
const userLogoutController = require("../controller/user/userLogout")
//frontend Product
const GetAllProductController = require("../controller/frontend/product/getAllProduct")
const GetProductDetailFrontendController = require("../controller/frontend/product/getProductDetail")

const authController = require("../controller/admin/auth/authController")
//product
const CreateProductController = require("../controller/admin/product/createProduct")
const getProductController = require("../controller/admin/product/getProduct")
const GetProductDetailController = require("../controller/admin/product/getProductDetail")
const UpdateProductController = require("../controller/admin/product/updateProduct")
const DeleteProductController = require("../controller/admin/product/deleteProduct")
//category
const getCategoryController = require("../controller/admin/category/getCategory")
const CreateCategoryController = require("../controller/admin/category/createCategory")
const DeleteCategoryController = require("../controller/admin/category/deleteCategory")
const GetCategoryDetailController = require("../controller/admin/category/getCategoryDetail")
const UpdateCategoryController = require("../controller/admin/category/updateCategory")
//Cart
const AddToCartController = require("../controller/frontend/cart/addToCart")
const GetCountCartController = require("../controller/frontend/cart/getCountCart")
const GetProductCartController = require("../controller/frontend/cart/getProductCart")
const DeleteProductCartController = require("../controller/frontend/cart/deleteProductCart")

//api user
router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/userDetail",authToken, userDetailsController )
router.get("/userLogout",userLogoutController)

//api frontend
//product
router.get("/products", GetAllProductController)
router.get ("/getProductDetail/:id", GetProductDetailFrontendController)
//add to cart
router.post("/addToCart",authToken, AddToCartController)
router.get("/getCountCart",authToken, GetCountCartController)
router.get("/getProductCart", authToken, GetProductCartController)
router.delete("/deleteProductCart/:id",authToken, DeleteProductCartController)

//api admin
router.post("/admin/login",authController)
//product admin
router.get("/admin/products",authToken, getProductController)
router.post("/admin/createProduct",authToken, upload.single('productImage'), CreateProductController)
router.get("/admin/getProductDetail/:id",authToken, GetProductDetailController)
router.post("/admin/updateProduct/:id",authToken,upload.single('productImage'), UpdateProductController)
router.delete("/admin/deleteProduct/:id",authToken, DeleteProductController)
//category admin
router.get("/admin/categories", authToken, getCategoryController)
router.post("/admin/createCategory",authToken, upload.single('categoryImage'), CreateCategoryController)
router.delete("/admin/deleteCategory/:id",authToken, DeleteCategoryController)
router.get("/admin/getCategoryDetail/:id", authToken, GetCategoryDetailController)
router.post("/admin/updateCategory/:id", authToken, upload.single('categoryImage'), UpdateCategoryController)

module.exports = router