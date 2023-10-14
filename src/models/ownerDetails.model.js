const mongoose = require("mongoose")

const ownerDetailsSchima = new mongoose.Schema(
    {
        ow_name: {
            type: String,
            trim: true
        },
        phone_number: {
            type: Number,
        },
        email: {
            type: String,
            trim: true
        },
        rest_detail: {
            type: mongoose.Types.ObjectId,
            ref: "restDetails"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const ownerDetails = mongoose.model("OwnerDetails", ownerDetailsSchima)
module.exports = ownerDetails;