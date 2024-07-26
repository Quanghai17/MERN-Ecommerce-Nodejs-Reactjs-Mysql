const { Order } = require("../../../models/orderModel");

async function DeleteOrderController (req, res) {
    try {
        const { id } = req.params;
        const order = await Order.findOne({
            where: { id },
        });

        if (!order) {
            throw new Error("Danh mục không tồn tại");
        }

        await order.destroy()
        res.status(200).json({
            message: "Xóa đơn hàng thành công",
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

module.exports = DeleteOrderController;