const { RestDetails } = require("../models")

/**
 * create restorent details
 * @param {object} reqBody
 * @returns {Promise<RestDetails>}
 */
const createRestDetails = async (reqBody) => {
    return RestDetails.create(reqBody)
};
/**list restorent details */
const getRestDetails = async () => {
    return RestDetails.find().populate("ow_details", { ow_name: 1 })
};

/**delete restorent details */
const deleteRestDetails = async (id) => {
    return RestDetails.findByIdAndDelete(id)
};

/**get restorent details */
const getRestDetailsById = async (id) => {
    return RestDetails.findById(id)
};

/**update restorent details */
const updateDetails = async (id, updateBody) => {
    return RestDetails.findByIdAndUpdate(id, { $set: updateBody })
};


module.exports = {
    createRestDetails,
    getRestDetails,
    deleteRestDetails,
    getRestDetailsById,
    updateDetails
}