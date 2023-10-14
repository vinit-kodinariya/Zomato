const express = require("express")
const foodGallaryVallidation = require("../../validations/foodGallary.vallidation")
const { foodGallaryController } = require("../../controllers")
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/**create food gallary */
router.post(
    "/create-foodGallary",
    upload.single("image"),
    validate(foodGallaryVallidation.createFoodGallary),
    foodGallaryController.createFoodGallary
);

/**list food gallary */
router.get(
    "/list-foodGallary",
    validate(foodGallaryVallidation.getFoodGallary),
    foodGallaryController.getFoodGallary
);

/**delete food gallary */
router.delete(
    "/delete-foodGallary/:ID",
    foodGallaryController.deleteFoodGallary
);
/**update food gallary */
router.delete(
    "/update-foodGallary/:ID",
    foodGallaryController.updateFoodGallary
);

module.exports = router