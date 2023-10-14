const Joi = require("joi")

/**create restorent details */
const createRestDetails = {
    body: Joi.object().keys({
        rest_name: Joi.string().required().trim(),
        rest_address: Joi.string().required().trim(),
        rest_number: Joi.string().required().trim(),
        star_date: Joi.string().required().trim(),
        end_date: Joi.string().required().trim(),
        rest_reting: Joi.string().required().trim(),
        ow_details: Joi.string().required().trim(),

    })
}
/**list restorent details */
const getRestDetails = {
    query: Joi.object().keys({
        rest_name: Joi.string().allow("").trim(),
        rest_address: Joi.string().allow("").trim(),
        rest_number: Joi.string().trim().allow(""),
        star_date: Joi.string().trim().allow(""),
        end_date: Joi.string().trim().allow(""),
        rest_reting: Joi.string().allow("").trim(),
        ow_details: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createRestDetails,
    getRestDetails
}