const { stateService } = require("../services")
/**create state */
const createState = async (req, res) => {
    try {
        const reqBody = req.body;
        const state = await stateService.createState(reqBody);
        if (!state) {
            throw new Error("state not found!")
        }
        res.status(200).json({
            success: true,
            message: ("state create successfully!"),
            data: { state }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list state */
const getState = async (req, res) => {
    try {
        const reqBody = req.body;
        const state = await stateService.getState(reqBody);
        if (!state) {
            throw new Error("state not found!")
        }
        res.status(200).json({
            success: true,
            message: ("state list successfully!"),
            data: { state }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete state */
const deleteState = async (req, res) => {
    try {
        const id = req.params.Id;
        const stateEx = await stateService.getState();
        if (!stateEx) {
            throw new Error("state not found!")
        }
        const state = await stateService.deleteState(id)
        res.status(200).json({
            success: true,
            message: ("state delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update state */
const updateState = async (req, res) => {
    try {
        const id = req.params.Id;
        const stateEx = await stateService.getStateById(id);
        if (!stateEx) {
            throw new Error("state not found!")
        }
        const state = await stateService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("state update successfully!"),
            data: { state }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createState,
    getState,
    deleteState,
    updateState
}