const { OrderItem } = require("../models");

/**
 * create order Item
 * @param {object} reqBody
 * @returns {Promise<OrderItem>}
 */
const createOrderItem = async (reqBody) => {
    return OrderItem.create(reqBody)
};

/**list order Item */
const getOrderItem = async () => {
    return OrderItem.find().populate("order_details", { order_date: 1, order_status: 1, price: 1 })
}

/**delete order Item */
const deleteOrderItem = async (Id) => {
    z
    return OrderItem.findByIdAndDelete(Id)
}

/**get by id  */
const getOrderItemById = async (Id) => {
    return OrderItem.findById(Id)
}

/**update order Item  */
const updateDetails = async (Id, updateBody) => {
    return OrderItem.findByIdAndUpdate(Id, { $set: updateBody })
}

module.exports = {
    createOrderItem,
    getOrderItem,
    deleteOrderItem,
    getOrderItemById,
    updateDetails
}
