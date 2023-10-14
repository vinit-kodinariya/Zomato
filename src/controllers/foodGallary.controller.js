const { foodGallaryService } = require("../services")
/**create food gallary */
const createFoodGallary = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("Food Gallary image is required!");
        }

        const foodGallary = await foodGallaryService.createFoodGallary(reqBody);
        if (!foodGallary) {
            throw new Error("food gallary not found!")
        }
        res.status(200).json({
            success: true,
            message: ("food gallary create successfully!"),
            data: { foodGallary }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list food gallary */
const getFoodGallary = async (req, res) => {
    try {
        const reqBody = req.body;
        const foodGallary = await foodGallaryService.getFoodGallary(reqBody);
        if (!foodGallary) {
            throw new Error("food gallary not found!")
        }
        res.status(200).json({
            success: true,
            message: ("food gallary list successfully!"),
            data: { foodGallary }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete food gallary */
const deleteFoodGallary = async (req, res) => {
    try {
        const id = req.params.Id;
        const foodGallaryEx = await foodGallaryService.getFoodGallary();
        if (!foodGallaryEx) {
            throw new Error("food gallary not found!")
        }
        const foodGallary = await foodGallaryService.deleteFoodGallary(id)
        res.status(200).json({
            success: true,
            message: ("food gallary delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update food gallary */
const updateFoodGallary = async (req, res) => {
    try {
        const id = req.params.Id;
        const foodGallaryEx = await foodGallaryService.getFoodGallaryById();
        if (!foodGallaryEx) {
            throw new Error("food gallary not found!")
        }
        const foodGallary = await foodGallaryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("food gallary update successfully!"),
            data: foodGallary
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createFoodGallary,
    getFoodGallary,
    deleteFoodGallary,
    updateFoodGallary
}