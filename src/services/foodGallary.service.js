const { FoodGallary } = require("../models")

/**
 * create food gallary
 * @param {object} reqBody
 * @returns {Promise<FoodGallary>}
 */
const createFoodGallary = async (reqBody) => {
    return FoodGallary.create(reqBody)
};

/**list food gallary */
const getFoodGallary = async () => {
    return FoodGallary.find().populate("price", { price: 1 })
}

/**delete food gallary */
const deleteFoodGallary = async (Id) => {
    return FoodGallary.findByIdAndDelete(Id)
}

/**get by id  */
const getFoodGallaryById = async (Id) => {
    return FoodGallary.findById(Id)
}

/**update food gallary  */
const updateDetails = async (Id, updateBody) => {
    return FoodGallary.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createFoodGallary,
    getFoodGallary,
    deleteFoodGallary,
    getFoodGallaryById,
    updateDetails
}
