const { countryService } = require("../services")

/**create country */
const createCountry = async (req, res) => {
    try {
        const reqBody = req.body;
        const country = await countryService.createCountry(reqBody);
        if (!country) {
            throw new Error("country not found!")
        }
        res.status(200).json({
            success: true,
            message: ("country create successfully!"),
            data: { country }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list country */
const getCountry = async (req, res) => {
    try {
        const reqBody = req.body;
        const country = await countryService.getCountry(reqBody);
        if (!country) {
            throw new Error("country not found!")
        }
        res.status(200).json({
            success: true,
            message: ("country list successfully!"),
            data: { country }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete country */
const deleteCountry = async (req, res) => {
    try {
        const id = req.params.Id;
        const countryEx = await countryService.getCountry();
        if (!countryEx) {
            throw new Error("country not found!")
        }
        const country = await countryService.deleteCountry(id)
        res.status(200).json({
            success: true,
            message: ("country delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update country */
const updateCountry = async (req, res) => {
    try {
        const id = req.params.Id;
        const countryEx = await countryService.getCountryById(id);
        if (!countryEx) {
            throw new Error("country not found!")
        }
        const country = await countryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("country update successfully!"),
            data: { country }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createCountry,
    getCountry,
    deleteCountry,
    updateCountry
}