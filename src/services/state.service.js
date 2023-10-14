const { State } = require("../models")

/**
 * create state
 * @param {object} reqBody
 * @returns {Promise<State>}
 */
const createState = async (reqBody) => {
    return State.create(reqBody)
};
/**list state */
const getState = async () => {
    return State.find().populate("country_name", { country_name: 1 })
};

/**delete state */
const deleteState = async (id) => {
    return State.findByIdAndDelete(id)
};

/**get state */
const getStateById = async (id) => {
    return State.findById(id)
};

/**update state */
const updateDetails = async (id, updateBody) => {
    return State.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createState,
    getState,
    deleteState,
    getStateById,
    updateDetails
}