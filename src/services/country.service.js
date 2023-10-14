const { Country } = require("../models")

/**
 * create Country
 * @param {object} reqBody
 * @returns {Promise<Country>}
 */
const createCountry = async (reqBody) => {
    return Country.create(reqBody)
};
/**list Country */
const getCountry = async () => {
    return Country.find()
};

/**delete Country */
const deleteCountry = async (id) => {
    return Country.findByIdAndDelete(id)
};

/**get Country */
const getCountryById = async (id) => {
    return Country.findById(id)
};

/**update Country */
const updateDetails = async (id, updateBody) => {
    return Country.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createCountry,
    getCountry,
    deleteCountry,
    getCountryById,
    updateDetails
}