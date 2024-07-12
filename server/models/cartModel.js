const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Product  = require("../models/productModel");

const Cart = sequelize.define("Cart", {
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product ,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
}, {
    timestamps: true,
});

Cart.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Cart; 