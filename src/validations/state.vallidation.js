const Joi = require("joi")

/**create state */
const createState = {
    body: Joi.object().keys({
        state_id: Joi.number().integer().allow(),
        state_name: Joi.string().required().trim(),
        country_name: Joi.string().required().trim(),
    })
}
/**list state */
const getState = {
    query: Joi.object().keys({
        state_id: Joi.number().integer().allow(""),
        state_name: Joi.string().allow("").trim(),
        country_name: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createState,
    getState
}