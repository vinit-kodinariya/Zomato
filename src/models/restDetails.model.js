const mongoose = require("mongoose")

const restDetailsSchema = new mongoose.Schema(
    {
        rest_name: {
            type: String,
            trim: true
        },
        rest_address: {
            type: String,
            trim: true
        },
        rest_number: {
            type: String,
        },
        star_date: {
            type: String,
            default: (new Date()).getTime()
        },
        end_date: {
            type: String,
            default: false,
        },
        rest_reting: {
            type: String,
            trim: true,
        },
        ow_details: {
            type: mongoose.Types.ObjectId,
            ref: "OwnerDetails"
        },
        is_active: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const restDetails = mongoose.model("restDetails", restDetailsSchema);
module.exports = restDetails;