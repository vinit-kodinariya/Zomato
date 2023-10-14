const express = require("express")
const { ownerDetailsVallidation } = require("../../validations")
const { ownerDetailsController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create-owner Details */
router.post(
    "/create-ownerDetails",
    validate(ownerDetailsVallidation.createOwnerDetails),
    ownerDetailsController.createOwnerDetails
);

/**list-owner Details */
router.get(
    "/list-ownerDetails",
    validate(ownerDetailsVallidation.getOwnerDetails),
    ownerDetailsController.getOwnerDetails
);

/**delete-owner Details */
router.delete(
    "/delete-ownerDetails/:ID",
    ownerDetailsController.deleteOwnerDetails
);
/**update-owner Details */
router.delete(
    "/update-ownerDetails/:ID",
    ownerDetailsController.updateOwnerDetails
);

module.exports = router