const mongoose = require("mongoose")

const orderDetailsSchima = new mongoose.Schema(
    {
        order_date: {
            type: String,
            trim: true
        },
        order_status: {
            type: Boolean,
            default: true
        },
        price: {
            type: Number,
            trim: true
        },
        user_details: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const orderDetails = mongoose.model("orderDetails", orderDetailsSchima)
module.exports = orderDetails;