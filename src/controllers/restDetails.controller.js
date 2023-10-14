const { restDetailsService } = require("../services")

/**create restorent details */
const createRestDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const restDetails = await restDetailsService.createRestDetails(reqBody);
        if (!restDetails) {
            throw new Error("restorent Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("restoren create successfully!"),
            data: { restDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list restorent details */
const getRestDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const restDetails = await restDetailsService.getRestDetails(reqBody);
        if (!restDetails) {
            throw new Error("restorent Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("restoren list successfully!"),
            data: { restDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete restorent details */
const deleteRestDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const restDetailsEx = await restDetailsService.getRestDetails();
        if (!restDetailsEx) {
            throw new Error("restorent Details not found!")
        }
        const restDetails = await restDetailsService.deleteRestDetails(id)
        res.status(200).json({
            success: true,
            message: ("restoren delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update restorent details */
const updateRestDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const restDetailsEx = await restDetailsService.getRestDetailsById(id);
        if (!restDetailsEx) {
            throw new Error("restorent Details not found!")
        }
        const restDetails = await restDetailsService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("restoren update successfully!"),
            data: { restDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
    createRestDetails,
    getRestDetails,
    deleteRestDetails,
    updateRestDetails
}