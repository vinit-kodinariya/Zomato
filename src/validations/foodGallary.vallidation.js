const Joi = require("joi")

/**create food gallery */
const createFoodGallary = {
    body: Joi.object().keys({
        food_name: Joi.string().required().trim(),
        image: Joi.string().allow("").trim(),
        food_desc: Joi.string().required().trim(),
        price: Joi.string().required().trim(),
    })
}

/**list food gallery */
const getFoodGallary = {
    query: Joi.object().keys({
        food_name: Joi.string().allow("").trim(),
        image: Joi.string().allow("").trim(),
        food_desc: Joi.string().allow("").trim(),
        price: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createFoodGallary,
    getFoodGallary,
}