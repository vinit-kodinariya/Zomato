const Joi = require("joi")

/**create owner detals */
const createCity = {
    body: Joi.object().keys({
        city_name: Joi.string().required().trim(),
        state: Joi.string().required().trim(),
        country_name: Joi.string().required().trim(),
    })
}

/**list owner detals */
const getCity = {
    query: Joi.object().keys({
        city_name: Joi.string().allow("").trim(),
        state: Joi.string().allow("").trim(),
        country_name: Joi.string().allow("").trim(),
    })
}

module.exports = {
    createCity,
    getCity,
}