const { ownerDetailsService } = require("../services")
/**create owner details */
const createOwnerDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const ownerDetails = await ownerDetailsService.createOwnerDetails(reqBody);
        if (!ownerDetails) {
            throw new Error("Owner Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("owner create successfully!"),
            data: { ownerDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list owner details */
const getOwnerDetails = async (req, res) => {
    try {
        const reqBody = req.body;
        const ownerDetails = await ownerDetailsService.getOwnerDetails(reqBody);
        console.log();
        if (!ownerDetails) {
            throw new Error("Owner Details not found!")
        }
        res.status(200).json({
            success: true,
            message: ("owner list successfully!"),
            data: { ownerDetails }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete owner details */
const deleteOwnerDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const ownerDetailsEx = await ownerDetailsService.getOwnerDetails();
        if (!ownerDetailsEx) {
            throw new Error("Owner Details not found!")
        }
        const ownerDetails = await ownerDetailsService.deleteOwnerDetails(id)
        res.status(200).json({
            success: true,
            message: ("owner delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update owner details */
const updateOwnerDetails = async (req, res) => {
    try {
        const id = req.params.Id;
        const ownerDetailsEx = await ownerDetailsService.getOwnerDetailsById();
        if (!ownerDetailsEx) {
            throw new Error("Owner Details not found!")
        }
        const ownerDetails = await ownerDetailsService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("owner update successfully!"),
            data: ownerDetails
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createOwnerDetails,
    getOwnerDetails,
    deleteOwnerDetails,
    updateOwnerDetails
}