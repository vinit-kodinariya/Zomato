const Joi = require("joi")

/**create order item */
const createOrderItem = {
    body: Joi.object().keys({
        qunttity: Joi.string().required().trim(),
        subTotal_price: Joi.string().required().trim(),
        order_details: Joi.string().required().trim(),
    })
}

/**list order item */
const getOrderItem = {
    query: Joi.object().keys({
        qunttity: Joi.string().allow("").trim(),
        subTotal_price: Joi.string().allow("").trim(),
        order_details: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createOrderItem,
    getOrderItem,
}