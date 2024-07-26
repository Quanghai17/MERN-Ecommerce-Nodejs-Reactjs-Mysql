const { Order, OrderItem } = require("../../../models/orderModel");
const Product = require("../../../models/productModel");
const cartModel = require("../../../models/cartModel");

async function CreateOrderController(req, res) {
    const currentUserId = req.userId
    const { items } = req.body;
    const {  shippingAddress, name, phone, email } = req.body.data;

    if (!currentUserId || !items || items.length === 0) {
        return res.status(400).json({ message: 'Không có dữ liệu' });
    }

    try {
        let totalAmount = 0;

        // Tính tổng số tiền đơn hàng
        for (const item of items) {
            const product = await Product.findByPk(item.productId);
            if (!product) {
                return res.status(404).json({ message: `Product with ID ${item.productId} not found` });
            }
            totalAmount += product.price * item.quantity;
        }

        const order = await Order.create({
            userId : currentUserId,
            totalAmount,
            shippingAddress,
            name,
            email,
            phone
        });

        for (const item of items) {
            await OrderItem.create({
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                price: item.price,
            });
        }

        const cart = await cartModel.destroy({
            where: { userId: currentUserId },
        });

        return res.status(201).json({
            message: 'Thanh toán thành công',
            error: false,
            success: true,
            data: order
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = CreateOrderController;