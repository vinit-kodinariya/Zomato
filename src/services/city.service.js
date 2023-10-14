const { City } = require("../models")

/**
 * create City
 * @param {object} reqBody
 * @returns {Promise<City>}
 */
const createCity = async (reqBody) => {
    return City.create(reqBody)
};

/**list City */
const getCity = async () => {
    return City.find().populate("state", { state_id: 1, state_name: 1 }).populate("country_name", { country: 1 })
};

/**delete City */
const deleteCity = async (id) => {
    return City.findByIdAndDelete(id)
};

/**get City */
const getCityById = async (id) => {
    return City.findById(id)
};

/**update City */
const updateDetails = async (id, updateBody) => {
    return City.findByIdAndUpdate(id, { $set: updateBody })
};

module.exports = {
    createCity,
    getCity,
    deleteCity,
    getCityById,
    updateDetails
}