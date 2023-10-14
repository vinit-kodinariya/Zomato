const Joi = require("joi")

/**create owner detals */
const createOwnerDetailsService = {
    body: Joi.object().keys({
        ow_name: Joi.string().required().trim(),
        phone_number: Joi.number().integer(),
        email: Joi.string().required().trim(),
        rest_detail: Joi.string().required(),
    })
}

/**list owner detals */
const getOwnerDetailsService = {
    query: Joi.object().keys({
        ow_name: Joi.string().allow("").trim(),
        phone_number: Joi.number().integer(),
        email: Joi.string().allow("").trim(),
        rest_detail: Joi.string().allow(""),
    })
}

module.exports = {
    createOwnerDetailsService,
    getOwnerDetailsService,
}