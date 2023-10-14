const express = require("express");
const { countryVallidation } = require("../../validations")
const { countryController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create country */
router.post(
    "/create-country",
    validate(countryVallidation.createCountry),
    countryController.createCountry
);

/**list country */
router.get(
    "/get-country",
    validate(countryVallidation.getCountry),
    countryController.getCountry
);

/**delete country */
router.delete(
    "/get-country/:Id",
    countryController.deleteCountry
);

/**update country */
router.put(
    "/get-country/:Id",
    countryController.updateCountry
);

module.exports = router