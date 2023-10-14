const { OwnerDetails } = require("../models");

/**
 * create owner details
 * @param {object} reqBody
 * @returns {Promise<OwnerDetails>}
 */
const createOwnerDetails = async (reqBody) => {
    return OwnerDetails.create(reqBody)
};

/**list owner details */
const getOwnerDetails = async () => {
    return OwnerDetails.find().populate("rest_detail", { rest_name: 1 })
}

/**delete owner details */
const deleteOwnerDetails = async (Id) => {
    return OwnerDetails.findByIdAndDelete(Id)
}

/**get by id  */
const getOwnerDetailsById = async (Id) => {
    return OwnerDetails.findById(Id)
}

/**update owner details  */
const updateDetails = async (Id, updateBody) => {
    return OwnerDetails.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createOwnerDetails,
    getOwnerDetails,
    deleteOwnerDetails,
    getOwnerDetailsById,
    updateDetails
}
