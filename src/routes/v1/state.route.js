const express = require("express");
const { stateVallidation } = require("../../validations")
const { stateController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create state */
router.post(
    "/create-state",
    validate(stateVallidation.createState),
    stateController.createState
);

/**list state */
router.get(
    "/get-state",
    validate(stateVallidation.getState),
    stateController.getState
);

/**delete state */
router.delete(
    "/get-state/:Id",
    stateController.deleteState
);

/**update state */
router.put(
    "/get-state/:Id",
    stateController.updateState
);


module.exports = router