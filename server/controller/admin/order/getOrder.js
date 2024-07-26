const { Order, OrderItem } = require("../../../models/orderModel");
const User = require("../../../models/userModel");

async function GetOrderController (req, res) {
    try {
        const orders = await Order.findAll();

        res.json({
            message: "Tất cả đơn hàng",
            success: true,
            error: false,
            data: orders
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message || error,
            error : true,
            success: false,
        })
    }
}

module.exports = GetOrderController;