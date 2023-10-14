const { OrderDetails } = require("../models")

/**
 * create order details
 * @param {object} reqBody
 * @returns {Promise<OrderDetails>}
 */
const createOrderDetails = async (reqBody) => {
    return OrderDetails.create(reqBody)
};

/**list order details */
const getOrderDetails = async () => {
    return OrderDetails.find().populate("user_details", { user_name: 1, email: 1, phone: 1 })
}

/**delete order details */
const deleteOrderDetails = async (Id) => {
    return OrderDetails.findByIdAndDelete(Id)
}

/**get by id  */
const getOrderDetailsById = async (Id) => {
    return OrderDetails.findById(Id)
}

/**update order details  */
const updateDetails = async (Id, updateBody) => {
    return OrderDetails.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createOrderDetails,
    getOrderDetails,
    deleteOrderDetails,
    getOrderDetailsById,
    updateDetails
}
