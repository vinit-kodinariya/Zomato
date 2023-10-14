const { cityService } = require("../services")
/**create city */
const createCity = async (req, res) => {
    try {
        const reqBody = req.body;
        const city = await cityService.createCity(reqBody);
        if (!city) {
            throw new Error("city not found!")
        }
        res.status(200).json({
            success: true,
            message: ("city create successfully!"),
            data: { city }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list city */
const getCity = async (req, res) => {
    try {
        const reqBody = req.body;
        const city = await cityService.getCity(reqBody);
        if (!city) {
            throw new Error("city not found!")
        }
        res.status(200).json({
            success: true,
            message: ("city list successfully!"),
            data: { city }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete city */
const deleteCity = async (req, res) => {
    try {
        const id = req.params.Id;
        const cityEx = await cityService.getCity();
        if (!cityEx) {
            throw new Error("city not found!")
        }
        const city = await cityService.deleteCity(id)
        res.status(200).json({
            success: true,
            message: ("city delete successfully!"),
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**update city */
const updateCity = async (req, res) => {
    try {
        const id = req.params.Id;
        const cityEx = await cityService.getCityById(id);
        if (!cityEx) {
            throw new Error("city not found!")
        }
        const city = await cityService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("city update successfully!"),
            data: { city }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = {
    createCity,
    getCity,
    deleteCity,
    updateCity
}