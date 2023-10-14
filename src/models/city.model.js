const mongoose = require("mongoose")

const citySchema = new mongoose.Schema(
    {
        city_name: {
            type: String,
            trim: true
        },
        state: {
            type: mongoose.Types.ObjectId,
            ref: "state"
        },
        country_name: {
            type: mongoose.Types.ObjectId,
            ref: "user"
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

const city = mongoose.model("city", citySchema);
module.exports = city;