const express = require("express")
const { orderDetailsVallidation } = require("../../validations")
const { orderDetailsController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create-order Details */
router.post(
    "/create-orderDetails",
    validate(orderDetailsVallidation.createOrderDetails),
    orderDetailsController.createOrderDetails
);

/**list-order Details */
router.get(
    "/list-orderDetails",
    validate(orderDetailsVallidation.getOrderDetails),
    orderDetailsController.getOrderDetails
);

/**delete-order Details */
router.delete(
    "/delete-orderDetails/:ID",
    orderDetailsController.deleteOrderDetails
);
/**update-order Details */
router.delete(
    "/update-orderDetails/:ID",
    orderDetailsController.updateOrderDetails
);

module.exports = router