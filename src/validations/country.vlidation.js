const Joi = require("joi")

/**create country */
const createCountry = {
    body: Joi.object().keys({
        country_name: Joi.string().required().trim(),
    })
}
/**list country */
const getCountry = {
    query: Joi.object().keys({
        country_name: Joi.string().allow("").trim(),
    })
}
module.exports = {
    createCountry,
    getCountry
}