const Joi = require("joi")

/**create order details */
const createOrderDetails = {
    body: Joi.object().keys({
        order_date: Joi.string().required().trim(),
        order_status: Joi.string().required().trim(),
        price: Joi.string().required().trim(),
        user_details: Joi.string().required().trim(),
    })
}

/**list order details */
const getOrderDetails = {
    query: Joi.object().keys({
        order_date: Joi.string().allow("").trim(),
        order_status: Joi.string().allow("").trim(),
        price: Joi.string().allow("").trim(),
        user_details: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createOrderDetails,
    getOrderDetails,
}