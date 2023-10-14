const mongoose = require("mongoose")

const orderItemSchima = new mongoose.Schema(
    {
        qunttity: {
            type: String,
            trim: true
        },
        subTotal_price: {
            type: Number,
            trim: true
        },
        order_details: {
            type: mongoose.Types.ObjectId,
            ref: "orderDetails"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const orderItem = mongoose.model("orderItem", orderItemSchima)
module.exports = orderItem;