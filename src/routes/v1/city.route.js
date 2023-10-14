const express = require("express");
const cityVallidation = require("../../validations/city.vallidation")
const { cityController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create city */
router.post(
    "/create-city",
    validate(cityVallidation.createCity),
    cityController.createCity
);

/**list city */
router.get(
    "/get-city",
    validate(cityVallidation.getCity),
    cityController.getCity
);

/**delete city */
router.delete(
    "/get-city/:Id",
    cityController.deleteCity
);

/**update city */
router.put(
    "/get-city/:Id",
    cityController.updateCity
);


module.exports = router