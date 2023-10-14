const express = require("express")
const { orderItemVallidation } = require("../../validations")
const { orderItemController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create-order item */
router.post(
    "/create-orderItem",
    validate(orderItemVallidation.createOrderItem),
    orderItemController.createOrderItem
);

/**list-order item */
router.get(
    "/list-orderItem",
    validate(orderItemVallidation.getOrderItem),
    orderItemController.getOrderItem
);

/**delete-order item */
router.delete(
    "/delete-orderItem/:ID",
    orderItemController.deleteOrderItem
);
/**update-order item */
router.delete(
    "/update-orderItem/:ID",
    orderItemController.updateOrderItem
);

module.exports = router