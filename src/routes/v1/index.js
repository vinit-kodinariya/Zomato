const express = require("express")

const ownerDetailsRoute = require("./ownerDetails.route")
const restDetailsRoute = require("./restDetails.route")
const countryRoute = require("./country.route")
const stateRoute = require("./state.route")
const cityRoute = require("./city.route")
const foodGallaryRoute = require("./foodGallary.route")
const userRoute = require("./user.route")
const orderItemRoute = require("./orderItem.route")
const orderDetailsRoute = require("./orderDetails.route")

const router = express.Router();

router.use("/ownerDetails", ownerDetailsRoute);
router.use("/restDetails", restDetailsRoute);
router.use("/country", countryRoute);
router.use("/state", stateRoute);
router.use("/city", cityRoute);
router.use("/foodGallary", foodGallaryRoute);
router.use("/user", userRoute);
router.use("/orderItem", orderItemRoute);
router.use("/orderDetails", orderDetailsRoute);

module.exports = router;